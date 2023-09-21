import User from "../models/user.model";
import Product from "../models/product.model";
import e from "express";

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
    
        if(!user.cart) {
            user.cart!.items = [];
        }
    
        user.cart!.items.push({ product: product?._id, amount: amount });
        user.cart!.totalAmount = user.cart!.items.reduce((acc, item) => acc + (item.amount! || 0) , 0);
    
        await user.save();
        return user;
    
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
        
        const { cart, orders } = user;
    
        if (cart && cart.items && cart.items.length > 0) {
            const newOrder = {
              items: cart.items,
              totalAmount: cart.totalAmount || 0,
            }
            
            orders.push(newOrder);
    
            cart.items = [];
            cart.totalAmount = 0;
    
            await user.save();
        } else {
            console.log('Cart is empty, nothing to move to orders');
        }

        return user;
    
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