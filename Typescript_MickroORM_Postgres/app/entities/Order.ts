import { Collection, Entity, ManyToOne, OneToMany, OneToOne, PrimaryKey } from "@mikro-orm/core";
import { User } from "./User";
import { OrderProduct } from "./OrderProduct";

@Entity()
export class Order {
    @PrimaryKey({type: 'uuid', defaultRaw: 'uuid_generate_v4()'})
    id!: string;

    @ManyToOne(() => User)
    user!: User;

    @OneToMany(() => OrderProduct, op => op.order, { eager: true }) // Eagerly load the products in the order
    orderProducts = new Collection<OrderProduct>(this);    
}