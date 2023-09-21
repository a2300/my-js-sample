import { Router } from "express";
import Product from "../models/product.model";
import { logger } from '../logger';

const router = Router();

router.get('/', async (req, res) => {
    try { 
        const products = await Product.find();
        return res.send(products);
    }catch(err) {
        logger.error(err);
        return res.status(500).send("Internal Server Error");
    }
});

router.get('/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        return res.send(product);
    }catch(err) {
        logger.error(err);
        return res.status(500).send("Internal Server Error");
    }
});

export const productRouter = router;