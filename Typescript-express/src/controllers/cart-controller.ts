import { CartEntity } from "../entities/cart.entity";
import { UserEntity } from "../entities/user.entity";
import { UserNotFoundError } from "../errors/userNotFoundError";
import * as userDatabase from '../repositories/user-repository';
import * as cartDatabase from '../repositories/cart-repository';
import * as orderDatabase from '../repositories/order-repository';

interface CartResponse {
    error: string | null;
    data: {
        cart: CartEntity | null;
    },
    totalPrice: number;
}

interface CartDeleteResponse {
    error: boolean;
    data: {
        success: boolean;
    }
}

interface CartOtherResponse {
    error: string | null;
    data: {
        cart: {
            id: string|undefined;
            items: any;
        }
    },
    totalPrice: number;
}

interface CartCheckoutResponse {
    error: string | null;
    data: {
        order: any;
    }
}


export default class CartController {
    public async createCart(userId: string): Promise<CartResponse> {
        await this.getAndValidationUserById(userId);
        const newCart = await cartDatabase.create(userId);
        return {
            error: null,
            data: { cart: newCart},
            totalPrice: this.calculateTotal(newCart)
        };
    }

    public async getCart(userId: string): Promise<CartResponse|null> {
        const user = await this.getAndValidationUserById(userId);
        const retrievedCart = await cartDatabase.findOneByUserId(user.id);
        if(!retrievedCart) 
            return null;
        
        return {
            error: null,
            data: { cart: retrievedCart},
            totalPrice: this.calculateTotal(retrievedCart)
        }
        
    }

    public async deleteCart(userId: string): Promise<CartDeleteResponse|null> {
        const user = await this.getAndValidationUserById(userId);

        const result = await cartDatabase.remove(user.id);
        if(!result) {
            return null; 
        }

        return { 
            data: {
                success: true
            }, 
            error: false
        };    
    }

    public async updateCart(userId: string, cartId: string, items: any, operation: string): Promise<CartOtherResponse|null> {
        await this.getAndValidationUserById(userId);
        const findCart = await cartDatabase.findOneById(cartId);
        if(!findCart) {
            return null;            
        }

        const updateCart = await cartDatabase.update(cartId, items, operation);

        return {
            error: null,
            data: { 
                cart: {
                    id: updateCart?.id,
                    items: updateCart?.items
                } 
            },
            totalPrice: this.calculateTotal(updateCart)
        };
    }

    public async checkout(userId: string): Promise<CartCheckoutResponse|null> {
        await this.getAndValidationUserById(userId);
        const newOrder = await orderDatabase.create(userId);

        return {
            error: null,
            data: { 
                order: newOrder
            }
        };         
    }

    private async getAndValidationUserById(userId: string): Promise<UserEntity> {
        const user = await userDatabase.findOne(userId); 
        if(!user) {
            throw new UserNotFoundError("Header x-user-id is missing or no user with such id");
        }
        return user;   
    }
    
    private calculateTotal(cartEntity: CartEntity|null): number {
        let totalPrice: number = 0;
        cartEntity?.items.forEach(e => totalPrice += e.product.price * e.count);
        return totalPrice;
    }    
}