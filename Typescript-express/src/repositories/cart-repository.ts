import { CartEntity, Carts, CartItemEntity } from '../entities/cart.entity';
import fs from "fs";
import {v4 as random} from "uuid";

let carts: Carts = loadCarts();

function loadCarts () : Carts {
    try {
      const data = fs.readFileSync("./carts.json", "utf-8")
      return JSON.parse(data)
    } catch (error) {
      console.log(`Error ${error}`)
      return {}
    }
}

function saveCarts () {
    try {
      fs.writeFileSync("./carts.json", JSON.stringify(carts), "utf-8")
      console.log(`Cart saved successfully!`)
    } catch (error) {
      console.log(`Error : ${error}`)
    }
  }

export const create = async (userId: string): Promise<CartEntity|null> => {
    let id = random();

    const cart: CartEntity = {
        id: id,
        userId: userId,
        isDeleted: false,
        items: []
    };

    carts[id] = cart;

    saveCarts();

    return cart;
}

export const findOneByUserId = async (userId : string) : Promise<CartEntity| null > => Object.values(carts).filter(e => e.userId === userId)[0];

export const findOneById = async (id: string) : Promise<CartEntity> => carts[id];

export const remove = async (userId: string): Promise<null| boolean> => {
    const cart = await findOneByUserId(userId);

    if(!cart) {
        return null;
    }

    delete carts[cart.id];

    saveCarts();

    return true;
}

export const update = async(id: string, updatedValues: CartItemEntity[], operation: string): Promise<CartEntity|null> => {
    const cart = await findOneById(id);
    if(!cart) {
        return null;
    }

    switch (operation) {
        case "ADD":
            updatedValues.forEach(e => cart.items.push(e));
            break;
        case "REMOVE":
            cart.items = cart.items.filter(i1 => !updatedValues.some(i2 => i2.product.id === i1.product.id));
            break;
        case "AMOUNT":
            for(let i1 of cart.items) {
                for(let i2 of updatedValues) {
                    if(i1.product.id === i2.product.id) {
                        i1.count = i2.count;
                        break;
                    }
                }
            }
            break;     
   
    }

    carts[id] = {
        id: cart.id,
        userId: cart.userId,
        isDeleted: cart.isDeleted, 
        items: cart.items
    }

    saveCarts();

    return carts[id];
}; 

