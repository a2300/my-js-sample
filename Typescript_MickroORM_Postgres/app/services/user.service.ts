import { DI } from "../app";
import { CartProduct } from "../entities/CartProduct";
import { Order } from "../entities/Order";
import { OrderProduct } from "../entities/OrderProduct";

export async function addProductToCart(userId: string, productId: string, amount: number) {
    // Find the user by their ID
    const user = await DI.userRepository.findOneOrFail({ id: userId });
  
    // Find the product by its ID
    const product = await DI.productRepository.findOneOrFail({ id: productId });
  
    // Create a new CartProduct to represent the product in the cart
    const cartProduct = new CartProduct();
    cartProduct.cart = user.cart;
    cartProduct.product = product;
    cartProduct.amount = amount;
  
    // Add the CartProduct to the user's cart
    user.cart.cartProducts.add(cartProduct);
  
    // Persist the changes to the database
    await DI.cartProductRepository.persistAndFlush(cartProduct);
}

export async function getUsers() {
    const users = await DI.userRepository.findAll();
    return users;
}

export async function createOrder(userId: string): Promise<string> {
    // Find the user by their ID
    const user = await DI.userRepository.findOneOrFail({ id: userId });

    // Create a new Order
    const order = new Order();
    order.user = user;
    
    // Iterate through the CartProducts in the user's cart
    for (const cartProduct of user.cart.cartProducts.getItems()) {
        // Create a new OrderProduct for each CartProduct
        const orderProduct = new OrderProduct();
        orderProduct.order = order;
        orderProduct.product = cartProduct.product;
        orderProduct.amount = cartProduct.amount;

        // Persist the OrderProduct
        await DI.orderProductRepository.persistAndFlush(orderProduct);

        // Remove the CartProduct from the user's cart
        user.cart.cartProducts.remove(cartProduct);
    }

    // Persist the Order and remove the CartProducts
    // await DI.em.persistAndFlush([order, user.cart.cartProducts]);
    await DI.orderRepository.persistAndFlush([order]);
    await DI.userRepository.persistAndFlush([user]);

    return order.id;

}