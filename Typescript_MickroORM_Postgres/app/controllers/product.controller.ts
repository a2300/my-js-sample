import { Router } from "express";
import { Request, Response } from 'express';
import { DI } from "../app";

const router = Router();

router.get('/', async(req: Request, res: Response) => {
    try {
        const products = await DI.productRepository.findAll();

        return res.json(products);
    }catch(e: any) {
        return res.status(400).json({ message: e.message });
    }
});

export const ProductController = router;