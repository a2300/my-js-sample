import { Router } from "express";
import Product from "../models/product.model";

const router = Router();

router.get('/', async (req, res) => {
    const products = await Product.find();
    return res.send(products);
});

router.get('/:id', async (req, res) => {
    const product = await Product.findById(req.params.id);
    return res.send(product);
});

export const productRouter = router;