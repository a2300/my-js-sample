import { Router } from "express";
import { Request, Response } from 'express';
import * as userService from '../services/user.service';

const router = Router();

router.post('/add_product', async(req: Request, res: Response) => {
    if(!req.body.userId || !req.body.productId || !req.body.amount) {
        res.status(400);
        return res.json({ message: 'Some of fields `userId`, `productId` or `amount` is missing' });        
    }
    try {
        await userService.addProductToCart(req.body.userId, req.body.productId, req.body.amount);

        return res.json({ message: 'Product added to cart' });
    }catch(e: any) {
        return res.status(400).json({ message: e.message });
    }
});

router.get('/', async(req: Request, res: Response) => {
    try {
        const users = await userService.getUsers();

        return res.json(users);
    }catch(e: any) {
        return res.status(400).json({ message: e.message });
    }
});

router.post('/create_order', async(req: Request, res: Response) => {
    if(!req.body.userId) {
        res.status(400);
        return res.json({ message: 'Some of fields `userId` is missing' });        
    }

    try {
        const orderId = await userService.createOrder(req.body.userId);

        return res.json({ message: `Order ${orderId} created` });
    }catch(e: any) {
        return res.status(400).json({ message: e.message });
    }
});

export const UserController = router;