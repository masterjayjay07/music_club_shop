import { MigrationInterface, QueryRunner } from "typeorm";

export class NewMigration1652893988700 implements MigrationInterface {
  name = "NewMigration1652893988700";

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "address" ("id" character varying NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "cep" character varying NOT NULL, "neighborhood" character varying NOT NULL, "country" character varying NOT NULL, "complement" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "products" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(120) NOT NULL, "price" integer NOT NULL, "img_url" character varying, "type" character varying(120) NOT NULL, "quantity_stock" integer NOT NULL, "rating" integer, "label" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_4c9fb58de893725258746385e16" UNIQUE ("name"), CONSTRAINT "PK_0806c755e0aca124e67c0cf6d7d" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "order" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "userId" character varying NOT NULL, "status" character varying NOT NULL, CONSTRAINT "PK_1031171c13130102495201e3e20" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "users" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(256) NOT NULL, "email" character varying(256) NOT NULL, "user_name" character varying NOT NULL, "birth_date" character varying NOT NULL, "is_adm" boolean NOT NULL DEFAULT false, "password" character varying NOT NULL, "create_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_97672ac88f789774dd47f7c8be3" UNIQUE ("email"), CONSTRAINT "UQ_074a1f262efaca6aba16f7ed920" UNIQUE ("user_name"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "order_products_products" ("orderId" uuid NOT NULL, "productsId" uuid NOT NULL, CONSTRAINT "PK_f11b886b3334bcd3b88a5282248" PRIMARY KEY ("orderId", "productsId"))`
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_382cb147efdbee36ef28dfd62d" ON "order_products_products" ("orderId") `
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_87570869d1d8035610899940a8" ON "order_products_products" ("productsId") `
    );
    await queryRunner.query(
      `ALTER TABLE "order_products_products" ADD CONSTRAINT "FK_382cb147efdbee36ef28dfd62da" FOREIGN KEY ("orderId") REFERENCES "order"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
    await queryRunner.query(
      `ALTER TABLE "order_products_products" ADD CONSTRAINT "FK_87570869d1d8035610899940a80" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "order_products_products" DROP CONSTRAINT "FK_87570869d1d8035610899940a80"`
    );
    await queryRunner.query(
      `ALTER TABLE "order_products_products" DROP CONSTRAINT "FK_382cb147efdbee36ef28dfd62da"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_87570869d1d8035610899940a8"`
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_382cb147efdbee36ef28dfd62d"`
    );
    await queryRunner.query(`DROP TABLE "order_products_products"`);
    await queryRunner.query(`DROP TABLE "users"`);
    await queryRunner.query(`DROP TABLE "order"`);
    await queryRunner.query(`DROP TABLE "products"`);
    await queryRunner.query(`DROP TABLE "address"`);
  }
}
