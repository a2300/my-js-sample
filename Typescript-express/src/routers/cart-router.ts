import express from "express";
import { Request, Response } from 'express'
import { StatusCodes } from "http-status-codes";
import Joi from 'joi';
import { UserNotFoundError } from "../errors/userNotFoundError";
import CartController from "../controllers/cart-controller";


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

const controller = new CartController();
export const cartRouter = express.Router();

cartRouter.post('/cart', async (req: Request, res: Response) => {
    try {
        
        const userId = req.header("x-user-id") || "";
        const response = await controller.createCart(userId);
        return res.status(StatusCodes.CREATED).json(response);
    
    }catch(err) {
        if(err instanceof UserNotFoundError) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                data:null,
                error: { message: err.message }
            });        
        }
        else 
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data: null,
                error: {message: "Ooops, something went wrong" }
            });        
    }
});

cartRouter.get('/cart', async (req: Request, res: Response) => {
    try {
        const userId = req.header("x-user-id") || "";
        const response = await controller.getCart(userId);
        
        if(!response) {
            return res.status(StatusCodes.NOT_FOUND).json({
                data: null, 
                error: {
                    message: `Cart with userId ${userId} is not found` 
                }            
            });
        }

        return res.status(StatusCodes.OK).json(response);

    }catch(err) {
        if(err instanceof UserNotFoundError) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                data:null,
                error: { message: err.message }
            });        
        }        
        else 
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data: null,
                error: {message: "Ooops, something went wrong" }
            });        
    }
});

cartRouter.delete('/cart', async (req: Request, res: Response) => {
    try {
        const userId = req.header("x-user-id") || "";
        const response = await controller.deleteCart(userId);
        if(!response) {
            return res.status(StatusCodes.NOT_FOUND).json({ 
                data: {
                    success: false
                }, 
                error: {
                    message: `Cart with userId ${userId} is not found` 
                }
            });
        }

        return res.status(StatusCodes.OK).json(response);
    }catch(err) {
        if(err instanceof UserNotFoundError) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                data:null,
                error: { message: err.message }
            });        
        }        
        else 
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data: null,
                error: {message: "Ooops, something went wrong" }
            });        
    }
});

cartRouter.put('/cart', async (req: Request, res: Response) =>{
    try {
        //Schema validation
        const { error, value } = inputSchema.validate(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
          }
        
        const userId = req.header("x-user-id") || "";

        const { id, items, operation }  = req.body;
        const updateCart = await controller.updateCart(userId, id, items, operation);

        if(!updateCart) {
            return res.status(StatusCodes.NOT_FOUND).json({ 
                data: {
                    success: false
                }, 
                error: {
                    message: `Cart with id ${id} is not found` 
                }
            });            
        }

        return res.status(StatusCodes.OK).json(updateCart);   

    }catch(err) {
        if(err instanceof UserNotFoundError) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                data:null,
                error: { message: err.message }
            });        
        }        
        else 
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data: null,
                error: {message: "Ooops, something went wrong" }
            });        
    }
});

cartRouter.put('/cart/checkout', async (req: Request, res: Response) =>{
    try {
        const userId = req.header("x-user-id") || "";
        const response = await controller.checkout(userId);
        return res.status(StatusCodes.OK).json(response);    
    }catch(err) {
        if(err instanceof UserNotFoundError) {
            return res.status(StatusCodes.UNAUTHORIZED).json({
                data:null,
                error: { message: err.message }
            });        
        }        
        else 
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
                data: null,
                error: {message: "Ooops, something went wrong" }
            });        
    }
});



