import express from 'express';
import { productsRouter } from './routers/product-router';
import { cartRouter } from './routers/cart-router';
import headerCheckMiddleware from './authentication/header-check-middleware';

const app = express();
const port = 3000;

app.use(express.json());
app.use(headerCheckMiddleware());
app.use('/api/products', productsRouter);
app.use('/api/profile', cartRouter);

app.listen(port, () => {
  return console.log(`server is listening on ${port}`);
});