import User from "../models/user.model";
import Product from "../models/product.model";
import Cart from "../models/cart.model";
import Order from "../models/order.model";
import bcrypt from "bcryptjs";

export async function addProductToCart(userId: string, productId: string, amount: number) {
    try {
    
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
        
        const product = await Product.findById(productId);
        if(!product) {
            throw new Error('Product not found');
        }  
    
        let cart = await Cart.findById(user.cart);
        if(!cart) {
            cart = await Cart.create({
                items: [],
                totalAmount: 0
            });
            user.cart = cart._id;
            await user.save();
        }

        cart.items.push({ product: product?._id, amount: amount });
    
        await cart.save();
    
    }catch(error) {
        console.error('Error adding product to cart:', error);
    }
}

export async function createOrder(userId: string) {
    try {

        const user = await User.findById(userId).populate('orders');
        if (!user) {
            throw new Error('User not found');
        }
        
        let { cart, orders } = user;

        const userCart = await Cart.findById(cart);
        if(!userCart) {
            throw new Error('Cart not found');
        }

        if(!orders) {
            orders = [];    
        }

        const newOrder = {
            items: [{}]
        }
        
        if (userCart.items && userCart.items.length > 0) {
            for(let item of userCart.items) {
                newOrder.items.push({ product: item.product, amount: item.amount });
            }
            const createOrder = await Order.create(newOrder);
            orders.push(createOrder._id);
            
            userCart.items = [];
            await userCart.save();

            const updateUser = await user.save();

            return updateUser;
        } else {
            console.log('Cart is empty, nothing to move to orders');        
        }   
    
    } catch(error) {
        console.error('Error moving cart to orders and clearing cart:', error);
        throw error;        
    }
}

export async function getAllUsers() {
    try {
        const users = await User.find();
        return users;
    } catch(error) {
        console.error('Error getting all users:', error);
        throw error;
    }
}

export async function getUserById(id: string) {
    try {
        const user = await User.findById(id).populate('orders');
        return user;
    } catch(error) {
        console.error('Error getting user by id:', error);
        throw error;
    }
}

export async function getUserByEmail(email: string) {
    try {
        const user = await User.findOne({ email });
        return user;
    } catch(error) {
        console.error('Error getting user by mail:', error);
        throw error;
    }    
}

export async function createUser({name, email, password, isAdmin}: {name: string, email: string, password: string, isAdmin:string}) {
    const encryptedPassword = await bcrypt.hash(password, 10);
    try {
        const cart = await Cart.create({
            items: []
        });
        
        const user = await User.create({
            name,
            email: email.toLowerCase(),
            password: encryptedPassword,
            role: isAdmin === "true" ? "admin" : "user",
            cart: cart._id
        });
        return user;
    }catch(error) {
        console.error('Error creating user', error);
        throw error;
    } 
}

export async function deleteCart(userId: string) {
    try {
        const user = await User.findById(userId);
        if (!user) {
            throw new Error('User not found');
        }
    
        const { cart } = user;
        const userCart = await Cart.findById(cart);
        if(!userCart) {
            throw new Error('Cart not found');
        }

        userCart.items = [];
        await userCart.save();

    } catch(error) {
        console.error('Error deleting cart:', error);
        throw error;
    }



}
