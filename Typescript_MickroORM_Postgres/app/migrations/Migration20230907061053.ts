import { Migration } from '@mikro-orm/migrations';

export class Migration20230907061053 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "cart_product" drop constraint "cart_product_cart_id_foreign";');

    this.addSql('alter table "cart_product" alter column "cart_id" drop default;');
    this.addSql('alter table "cart_product" alter column "cart_id" type uuid using ("cart_id"::text::uuid);');
    this.addSql('alter table "cart_product" alter column "cart_id" drop not null;');
    this.addSql('alter table "cart_product" add constraint "cart_product_cart_id_foreign" foreign key ("cart_id") references "cart" ("id") on update cascade on delete set null;');
  }

  async down(): Promise<void> {
    this.addSql('alter table "cart_product" drop constraint "cart_product_cart_id_foreign";');

    this.addSql('alter table "cart_product" alter column "cart_id" drop default;');
    this.addSql('alter table "cart_product" alter column "cart_id" type uuid using ("cart_id"::text::uuid);');
    this.addSql('alter table "cart_product" alter column "cart_id" set not null;');
    this.addSql('alter table "cart_product" add constraint "cart_product_cart_id_foreign" foreign key ("cart_id") references "cart" ("id") on update cascade;');
  }

}
