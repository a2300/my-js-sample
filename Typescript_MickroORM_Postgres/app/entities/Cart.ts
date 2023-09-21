import { Cascade, Collection, Entity, OneToMany, OneToOne, PrimaryKey } from "@mikro-orm/core";
import { User } from "./User";
import { CartProduct } from "./CartProduct";

@Entity()
export class Cart {
    @PrimaryKey({type: 'uuid', defaultRaw: 'uuid_generate_v4()'})
    id!: string;

    @OneToOne(() => User, { owner: true }) // The owner flag indicates that this is the owning side of the relationship
    user!: User;

    @OneToMany(() => CartProduct, cp => cp.cart, { eager: true }) // Eagerly load the products in the cart
    cartProducts = new Collection<CartProduct>(this);  
}