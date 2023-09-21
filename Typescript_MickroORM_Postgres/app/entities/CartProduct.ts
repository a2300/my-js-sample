import { Entity, ManyToOne, PrimaryKey, Property, t } from "@mikro-orm/core";
import { Cart } from "./Cart";
import { Product } from "./Product";

@Entity()
export class CartProduct {
  @PrimaryKey({ type: 'uuid', defaultRaw: 'uuid_generate_v4()' })
  id!: string;

  @ManyToOne(() => Cart, {nullable: true})
  cart!: Cart;

  @ManyToOne(() => Product)
  product!: Product;

  @Property()
  amount!: number;
}