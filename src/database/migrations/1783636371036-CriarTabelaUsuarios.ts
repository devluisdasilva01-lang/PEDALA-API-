import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelaUsuarios1783636371036 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS usuarios(
                id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
                nome VARCHAR(150) NOT NULL,
                email VARCHAR(150) NOT NULL UNIQUE,
                telefone VARCHAR(20)
            );
            `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("usuarios");
    }

}
