import { OrderEntity, Orders } from '../entities/order.entity';
import fs from "fs";
import {v4 as random} from "uuid";
import * as cartDatabase from './cart-repository';

let orders: Orders = loadOrders();

function loadOrders () : Orders {
    try {
      const data = fs.readFileSync("./orders.json", "utf-8")
      return JSON.parse(data)
    } catch (error) {
      console.log(`Error ${error}`)
      return {}
    }
}

function saveOrders () {
    try {
      fs.writeFileSync("./orders.json", JSON.stringify(orders), "utf-8")
      console.log(`Order saved successfully!`)
    } catch (error) {
      console.log(`Error : ${error}`)
    }
}

export const create = async (userId: string): Promise<OrderEntity|null> => {
    let id = random();

    const cart = await cartDatabase.findOneByUserId(userId);
    

    const order: OrderEntity = {
        id: id,
        userId: userId,
        cartId: cart?.id || "",
        items: cart?.items || [],
        payment: {
            type: 'paypal',
            address: undefined,
            creditCard: undefined
          },
          delivery: {
            type: 'post',
            address: undefined
          },
          comments: '',
          status: 'created',
          total: cart?.items.reduce((acc, val) => acc + val.product.price, 0) || 0,        
    };

    orders[id] = order;

    saveOrders();

    return order;
}