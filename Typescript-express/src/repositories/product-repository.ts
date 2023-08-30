import { ProductEntity, Products } from '../entities/product.entity';
import fs from "fs";

let products: Products = loadProducts();

function loadProducts(): Products {
    try {
        const data = fs.readFileSync("./products.json", "utf-8")
        return JSON.parse(data)
      } catch (error) {
        console.log(`Error ${error}`)
        return {}
      }    
}

export const findAll = async() : Promise<ProductEntity[]> => Object.values(products);
export const findOne = async (id : string) : Promise<ProductEntity| null > => Object.values(products).filter(e => e.id === id)[0];

