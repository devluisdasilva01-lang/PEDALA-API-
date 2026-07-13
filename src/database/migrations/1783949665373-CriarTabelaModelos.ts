import { MigrationInterface, QueryRunner } from "typeorm";

export class CriarTabelaModelos1783949665373 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS modelos (
                id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
                nm_modelo VARCHAR(150) NOT NULL UNIQUI, 
                marca_id UUID NOT NULL UNIQUI,
                
                CONSTRAINT fk_modelo_marca FOREIGN KEY (marca_id)
                    REFERENCES marcas(id) ON UPDATE NO ACTION ON DELETE CASCADE 
            );
            `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('marcas');
    }

}
