import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelaUsuarios1783636371036 implements MigrationInterface {
    name = 'CriarTabelaUsuarios1783636371036'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE "usuarios" (
                "id" uuid NOT NULL DEFAULT uuid_generate_v4(), "nome" character varying NOT NULL, 
                "email" character varying NOT NULL, 
                "telefone" character varying NOT NULL, 
                CONSTRAINT "PK_d7281c63c176e152e4c531594a8" 
                PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "usuarios"`);
    }

}
