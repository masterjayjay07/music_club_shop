import { MigrationInterface, QueryRunner } from "typeorm";

export class addressTableON1652844363675 implements MigrationInterface {
    name = 'addressTableON1652844363675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" uuid NOT NULL, "street" character varying NOT NULL, "number" integer NOT NULL, "cep" character varying NOT NULL, "neighborhood" character varying NOT NULL, "country" character varying NOT NULL, "complement" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
