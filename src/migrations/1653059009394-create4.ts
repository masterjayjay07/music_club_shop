import { MigrationInterface, QueryRunner } from "typeorm";

export class create41653059009394 implements MigrationInterface {
    name = 'create41653059009394'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "buys" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "address" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "buys" ADD CONSTRAINT "FK_3bb64d577595984a95f14ea0f71" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "address" ADD CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "address" DROP CONSTRAINT "FK_d25f1ea79e282cc8a42bd616aa3"`);
        await queryRunner.query(`ALTER TABLE "buys" DROP CONSTRAINT "FK_3bb64d577595984a95f14ea0f71"`);
        await queryRunner.query(`ALTER TABLE "address" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "buys" DROP COLUMN "userId"`);
    }

}
