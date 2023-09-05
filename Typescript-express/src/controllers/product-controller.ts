import { ProductEntity } from "../entities/product.entity";
import * as productDatabase from '../repositories/product-repository';

export default class ProductController {
    public async findAll(): Promise<ProductEntity[]> {
        return productDatabase.findAll();
    }

    public async findOne(id: string): Promise<ProductEntity|null> {
        return productDatabase.findOne(id);
    }
}