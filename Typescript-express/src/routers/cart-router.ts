import express from "express";
import { Request, Response } from 'express'
import * as userDatabase from '../repositories/user-repository';
import * as cartDatabase from '../repositories/cart-repository';
import * as orderDatabase from '../repositories/order-repository';
import { StatusCodes } from "http-status-codes";
import Joi from 'joi';


const operationValues = ['ADD', 'REMOVE', 'AMOUNT'];

const productSchema = Joi.object({
    id: Joi.string().uuid().required(),
    title: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().positive().required(),
  });

const itemSchema = Joi.object({
    count: Joi.number().integer().min(1).required(),
    product: productSchema.required(),
  });

const inputSchema = Joi.object({
    id: Joi.string().guid({ version: ['uuidv4'] }).required(),
    operation: Joi.string().valid(...operationValues).required(),
    items: Joi.array().items(itemSchema).min(1).required()
});

export const cartRouter = express.Router();

cartRouter.post('/cart', async (req: Request, res: Response) => {
    try {
        const user = await userDatabase.findOne(req.header("x-user-id") || "");
        if(!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                data:null,
                error: { message: "Header x-user-id is missing or no user with such id"}
            });
        }

        const newCart = await cartDatabase.create(req.header("x-user-id") || "");

        let totalPrice: number = 0;
        newCart?.items.forEach(e => totalPrice += e.product.price * e.count);
        return res.status(StatusCodes.CREATED).json({
            error: null,
            data: { cart: newCart},
            totalPrice: totalPrice
        });

    }catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: null,
            error: {message: "Ooops, something went wrong" }
        });        
    }
});

cartRouter.get('/cart', async (req: Request, res: Response) => {
    try {
        const user = await userDatabase.findOne(req.header("x-user-id") || "");
        if(!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                data:null,
                error: { message: "Header x-user-id is missing or no user with such id"}
            });
        }
        
        const retrievedCart = await cartDatabase.findOneByUserId(user.id);
        if(!retrievedCart) {
            return res.status(StatusCodes.NOT_FOUND).json({ 
                data: null, 
                error: {
                    message: `Cart with userId ${user.id} is not found` 
                }
            });
        }

        let totalPrice: number = 0;
        retrievedCart?.items.forEach(e => totalPrice += e.product.price * e.count);
        return res.status(StatusCodes.OK).json({
            error: null,
            data: { 
                cart: {
                    id: retrievedCart?.userId,
                    items: retrievedCart?.items
                } 
            },
            totalPrice: totalPrice
        });        
        

    }catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: null,
            error: {message: "Ooops, something went wrong" }
        });        
    }
});

cartRouter.delete('/cart', async (req: Request, res: Response) => {
    const user = await userDatabase.findOne(req.header("x-user-id") || "");
    if(!user) {
        return res.status(StatusCodes.UNAUTHORIZED).json({
            data:null,
            error: { message: "Header x-user-id is missing or no user with such id"}
        });
    }

    const result = await cartDatabase.remove(user.id);
    if(!result) {
        return res.status(StatusCodes.NOT_FOUND).json({ 
            data: {
                success: false
            }, 
            error: {
                message: `Cart with userId ${user.id} is not found` 
            }
        });
    }

    return res.status(StatusCodes.OK).json({ 
        data: {
            success: true
        }, 
        error: false
    });
});

cartRouter.put('/cart', async (req: Request, res: Response) =>{
    try {
        //Schema validation
        const { error, value } = inputSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
        
        const user = await userDatabase.findOne(req.header("x-user-id") || "");
        if(!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                data:null,
                error: { message: "Header x-user-id is missing or no user with such id"}
            });
        }

        const { id, items, operation }  = req.body;
        const findCart = await cartDatabase.findOneById(id);

        if(!findCart) {
            return res.status(StatusCodes.NOT_FOUND).json({ 
                data: {
                    success: false
                }, 
                error: {
                    message: `Cart with id ${id} is not found` 
                }
            });            
        }

        const updateCart = await cartDatabase.update(id, items, operation);

        let totalPrice: number = 0;
        updateCart?.items?.forEach(e => totalPrice += e.product.price * e.count);

        return res.status(StatusCodes.OK).json({
            error: null,
            data: { 
                cart: {
                    id: updateCart?.id,
                    items: updateCart?.items
                } 
            },
            totalPrice: totalPrice
        });   

    }catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: null,
            error: {message: "Ooops, something went wrong" }
        });        
    }
});

cartRouter.put('/cart/checkout', async (req: Request, res: Response) =>{
    try {
        const user = await userDatabase.findOne(req.header("x-user-id") || "");
        if(!user) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                data:null,
                error: { message: "Header x-user-id is missing or no user with such id"}
            });
        }

        const newOrder = await orderDatabase.create(req.header("x-user-id") || "");

        return res.status(StatusCodes.OK).json({
            error: null,
            data: { 
                order: newOrder
            }
        });   

    }catch(err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            data: null,
            error: {message: "Ooops, something went wrong" }
        });        
    }
});


