import { Router } from "express";
import * as userService from "../services/user.service";

const router = Router();

router.get('/', async (req, res) => {
    const users = await userService.getAllUsers();
    return res.send(users);
});

router.get('/:id', async (req, res) => {
    const user = await userService.getUserById(req.params.id);
    return res.send(user);
});


router.post('/add_product_to_cart', async (req, res) => {
    if(!req.body.userId || !req.body.productId || !req.body.amount) {
        res.status(400);
        return res.json({ message: 'Some of fields `userId`, `productId` or `amount` is missing' });        
    }

    const user = await userService.addProductToCart(req.body.userId, req.body.productId, req.body.amount);
    return res.send(user);
})

router.post('/create_order', async (req, res) => {
    if(!req.body.userId) {
        res.status(400);
        return res.json({ message: 'Some of fields `userId` is missing' });        
    }
    
    const user = await userService.createOrder(req.body.userId);
    return res.send(user);

});

export const userRouter = router;