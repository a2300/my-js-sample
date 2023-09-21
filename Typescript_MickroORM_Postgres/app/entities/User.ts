import { Collection, Entity, OneToMany, OneToOne, PrimaryKey, Property } from '@mikro-orm/core';
import { Order } from './Order';
import { Cart } from './Cart';

@Entity()
export class User {
    @PrimaryKey({type: 'uuid', defaultRaw: 'uuid_generate_v4()'})
    id!: string;

    @Property()
    name!: string;

    @OneToOne(() => Cart, cart => cart.user, {eager: true}) // Eagerly load the user's cart
    cart!: Cart;

    @OneToMany(() => Order, order => order.user)
    orders = new Collection<Order>(this);
}