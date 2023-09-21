import * as dotenv from 'dotenv'
dotenv.config()

import config from './orm.config'
import 'reflect-metadata';
import http from 'http';
import express from 'express';
import { EntityManager, EntityRepository, MikroORM, RequestContext } from '@mikro-orm/core';

import { UserController } from './controllers/user.controller';
import { PostgreSqlDriver } from "@mikro-orm/postgresql";
import { Cart } from './entities/Cart';
import { Order } from './entities/Order';
import { Product } from './entities/Product';
import { User } from './entities/User';
import { CartProduct } from './entities/CartProduct';
import { ProductController } from './controllers/product.controller';
import { OrderController } from './controllers/order.controller';
import { OrderProduct } from './entities/OrderProduct';
import morgan from 'morgan';

export const DI = {} as {
  server: http.Server;
  orm: MikroORM,
  em: EntityManager,
  cartRepository: EntityRepository<Cart>,
  orderRepository: EntityRepository<Order>,
  productRepository: EntityRepository<Product>,
  userRepository: EntityRepository<User>,
  cartProductRepository: EntityRepository<CartProduct>,
  orderProductRepository: EntityRepository<OrderProduct>
};

export const app = express();
const port = process.env.PORT || 3001;

export const init = (async () => {
  DI.orm = await MikroORM.init<PostgreSqlDriver>(config);

  DI.em = DI.orm.em;
  DI.cartRepository = DI.orm.em.getRepository(Cart);
  DI.orderRepository = DI.orm.em.getRepository(Order);
  DI.productRepository = DI.orm.em.getRepository(Product);
  DI.userRepository = DI.orm.em.getRepository(User);
  DI.cartProductRepository = DI.orm.em.getRepository(CartProduct);
  DI.orderProductRepository = DI.orm.em.getRepository(OrderProduct);

  app.use(express.json());
  app.use(morgan('tiny'));

  app.use((req, res, next) => RequestContext.create(DI.orm.em, next));
  app.get('/', (req, res) => res.json({ message: 'Welcome to MikroORM express TS example' }));
  
  
  app.use('/users', UserController);
  app.use('/products', ProductController);
  app.use('/orders', OrderController);

  app.use((req, res) => res.status(404).json({ message: 'No route found' }));

  DI.server = app.listen(port, () => {
    console.log(`MikroORM express TS example started at http://localhost:${port}`);
  });
})();