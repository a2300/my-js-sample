import { Entity, ManyToOne, PrimaryKey, Property } from "@mikro-orm/core";
import { Order } from "./Order";
import { Product } from "./Product";

@Entity()
export class OrderProduct {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  id!: string;

  @ManyToOne(() => Order)
  order!: Order;

  @ManyToOne(() => Product)
  product!: Product;

  @Property()
  amount!: number;
}