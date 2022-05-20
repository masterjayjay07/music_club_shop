import { MigrationInterface, QueryRunner } from "typeorm";

export class crateTable1653053211085 implements MigrationInterface {
    name = 'crateTable1653053211085'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "carts" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "subtotal" double precision NOT NULL, "userId" character varying NOT NULL, CONSTRAINT "PK_b5f695a59f5ebb50af3c8160816" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "carts_products_products" ("cartsId" uuid NOT NULL, "productsId" uuid NOT NULL, CONSTRAINT "PK_88c6c87a047a1483387693e891a" PRIMARY KEY ("cartsId", "productsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_6d4a98ce8aefd303215e05d6c8" ON "carts_products_products" ("cartsId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8689ca568058fafcbfc0fcd753" ON "carts_products_products" ("productsId") `);
        await queryRunner.query(`ALTER TABLE "users" ADD "cartId" uuid`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "UQ_89502c44bd22c06e714c31c1e93" UNIQUE ("cartId")`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_89502c44bd22c06e714c31c1e93" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "carts_products_products" ADD CONSTRAINT "FK_6d4a98ce8aefd303215e05d6c8c" FOREIGN KEY ("cartsId") REFERENCES "carts"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "carts_products_products" ADD CONSTRAINT "FK_8689ca568058fafcbfc0fcd7539" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "carts_products_products" DROP CONSTRAINT "FK_8689ca568058fafcbfc0fcd7539"`);
        await queryRunner.query(`ALTER TABLE "carts_products_products" DROP CONSTRAINT "FK_6d4a98ce8aefd303215e05d6c8c"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_89502c44bd22c06e714c31c1e93"`);
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "UQ_89502c44bd22c06e714c31c1e93"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "cartId"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8689ca568058fafcbfc0fcd753"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_6d4a98ce8aefd303215e05d6c8"`);
        await queryRunner.query(`DROP TABLE "carts_products_products"`);
        await queryRunner.query(`DROP TABLE "carts"`);
    }

}
