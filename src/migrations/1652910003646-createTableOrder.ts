import { MigrationInterface, QueryRunner } from "typeorm"

<<<<<<<< HEAD:src/migrations/1652893635321-initialMigration.ts
export class initialMigration1652893635321 implements MigrationInterface {
========
export class createTableOrder1652910003646 implements MigrationInterface {
>>>>>>>> development:src/migrations/1652910003646-createTableOrder.ts

    public async up(queryRunner: QueryRunner): Promise<void> {
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
