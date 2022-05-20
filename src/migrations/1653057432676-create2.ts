import { MigrationInterface, QueryRunner } from "typeorm";

export class create21653057432676 implements MigrationInterface {
    name = 'create21653057432676'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "buys" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "total" double precision NOT NULL, CONSTRAINT "PK_34ecbce508fa8a98d0f23d9372a" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "buys_products_products" ("buysId" uuid NOT NULL, "productsId" uuid NOT NULL, CONSTRAINT "PK_7283360b4cbb13b5848e0135b7a" PRIMARY KEY ("buysId", "productsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_97ac7f3f3a5f957bd4a76727e4" ON "buys_products_products" ("buysId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e54a8e7d76477d7c0bc89d6b54" ON "buys_products_products" ("productsId") `);
        await queryRunner.query(`ALTER TABLE "buys_products_products" ADD CONSTRAINT "FK_97ac7f3f3a5f957bd4a76727e4e" FOREIGN KEY ("buysId") REFERENCES "buys"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "buys_products_products" ADD CONSTRAINT "FK_e54a8e7d76477d7c0bc89d6b54a" FOREIGN KEY ("productsId") REFERENCES "products"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buys_products_products" DROP CONSTRAINT "FK_e54a8e7d76477d7c0bc89d6b54a"`);
        await queryRunner.query(`ALTER TABLE "buys_products_products" DROP CONSTRAINT "FK_97ac7f3f3a5f957bd4a76727e4e"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e54a8e7d76477d7c0bc89d6b54"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_97ac7f3f3a5f957bd4a76727e4"`);
        await queryRunner.query(`DROP TABLE "buys_products_products"`);
        await queryRunner.query(`DROP TABLE "buys"`);
    }

}
