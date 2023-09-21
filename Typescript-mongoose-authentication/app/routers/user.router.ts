import { Router } from "express";
import * as userService from "../services/user.service";
import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { isAdminUser } from "../middleware/isAdminUser";


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
    if(!req.body.productId || !req.body.amount) {
        res.status(400);
        return res.json({ message: 'Some of fields `userId`, `productId` or `amount` is missing' });        
    }
    const userId = req.user.user_id;

    const user = await userService.addProductToCart(userId, req.body.productId, req.body.amount);
    return res.send(user);
})

router.post('/create_order', async (req, res) => {
    const userId = req.user.user_id;
    
    const user = await userService.createOrder(userId);
    return res.send(user);

});

router.delete('/delete_cart', isAdminUser, async (req, res) => {
    try{ 
        const userId = req.user.user_id;
        const user = await userService.deleteCart(userId);

        return res.status(204).send("Book deleted successfully");
    } catch (err) {
        console.error(err);
        return res.status(500).send("Internal Server Error");
    }
});


export const userRouter = router;