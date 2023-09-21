import { Router } from "express";
import { Request, Response } from 'express';
import { DI } from "../app";

const router = Router();

router.get('/', async(req: Request, res: Response) => {
    try {
        const orders = await DI.orderRepository.findAll();

        return res.json(orders);
    }catch(e: any) {
        return res.status(400).json({ message: e.message });
    }
});

router.get('/:orderId', async(req: Request, res: Response) => {
    try {
        const order = await DI.orderRepository.findOneOrFail({ id: req.params.orderId });
        return res.json(order);

    } catch(e: any) {
        return res.status(400).json({ message: e.message });
    }
});

export const OrderController = router;