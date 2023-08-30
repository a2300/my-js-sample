import express from "express";
import { Request, Response } from 'express'
import * as productDatabase from '../repositories/product-repository';
import { StatusCodes } from "http-status-codes";


export const productsRouter = express.Router();

productsRouter.get('/', async (req: Request, res: Response) => {
    console.log('in productRouter GET All products');
    
    try {
        const products = await productDatabase.findAll();
        if(!products) {
            return res.status(StatusCodes.NOT_FOUND).json({
                data:null,
                error: { message: "No product found!"}
            });
        }
        return res.json({data: products, error: null});
    } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: null,
            error: {message: "Ooops, something went wrong" }
        });
    }
});



productsRouter.get('/:productId', async (req: Request, res: Response) => {
    const productId: string = req.params.productId;
    console.log(`in productRouter GET  productById: ${productId}`);
    try {
        const product = await productDatabase.findOne(productId);
        if(!product) {
            return res.status(StatusCodes.NOT_FOUND).json({ 
                data: null, 
                error: {
                    message: `Product with id ${productId} is not found` 
                }
            });
        }
        return res.json({data: product, error: null});

    } catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: null,
            error: {message: "Ooops, something went wrong" }
        });       
    }    
});

