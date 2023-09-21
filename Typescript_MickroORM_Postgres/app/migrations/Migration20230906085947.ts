import { Migration } from '@mikro-orm/migrations';

export class Migration20230906085947 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "product" ("id" uuid not null default uuid_generate_v4(), "title" varchar(255) not null, "description" varchar(255) not null, "price" int not null, constraint "product_pkey" primary key ("id"));');

    this.addSql('create table "user" ("id" uuid not null default uuid_generate_v4(), "name" varchar(255) not null, constraint "user_pkey" primary key ("id"));');

    this.addSql('create table "order" ("id" uuid not null default uuid_generate_v4(), "user_id" uuid not null, constraint "order_pkey" primary key ("id"));');

    this.addSql('create table "order_product" ("id" uuid not null default uuid_generate_v4(), "order_id" uuid not null, "product_id" uuid not null, "amount" int not null, constraint "order_product_pkey" primary key ("id"));');

    this.addSql('create table "cart" ("id" uuid not null default uuid_generate_v4(), "user_id" uuid not null, constraint "cart_pkey" primary key ("id"));');
    this.addSql('alter table "cart" add constraint "cart_user_id_unique" unique ("user_id");');

    this.addSql('create table "cart_product" ("id" uuid not null default uuid_generate_v4(), "cart_id" uuid not null, "product_id" uuid not null, "amount" int not null, constraint "cart_product_pkey" primary key ("id"));');

    this.addSql('alter table "order" add constraint "order_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');

    this.addSql('alter table "order_product" add constraint "order_product_order_id_foreign" foreign key ("order_id") references "order" ("id") on update cascade;');
    this.addSql('alter table "order_product" add constraint "order_product_product_id_foreign" foreign key ("product_id") references "product" ("id") on update cascade;');

    this.addSql('alter table "cart" add constraint "cart_user_id_foreign" foreign key ("user_id") references "user" ("id") on update cascade;');

    this.addSql('alter table "cart_product" add constraint "cart_product_cart_id_foreign" foreign key ("cart_id") references "cart" ("id") on update cascade;');
    this.addSql('alter table "cart_product" add constraint "cart_product_product_id_foreign" foreign key ("product_id") references "product" ("id") on update cascade;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "order_product" drop constraint "order_product_product_id_foreign";');

    this.addSql('alter table "cart_product" drop constraint "cart_product_product_id_foreign";');

    this.addSql('alter table "order" drop constraint "order_user_id_foreign";');

    this.addSql('alter table "cart" drop constraint "cart_user_id_foreign";');

    this.addSql('alter table "order_product" drop constraint "order_product_order_id_foreign";');

    this.addSql('alter table "cart_product" drop constraint "cart_product_cart_id_foreign";');

    this.addSql('drop table if exists "product" cascade;');

    this.addSql('drop table if exists "user" cascade;');

    this.addSql('drop table if exists "order" cascade;');

    this.addSql('drop table if exists "order_product" cascade;');

    this.addSql('drop table if exists "cart" cascade;');

    this.addSql('drop table if exists "cart_product" cascade;');
  }

}
