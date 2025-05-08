import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Measurement1746715019608 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(new Table({
            name: 'unidade_medida',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'nome',
                    type: 'varchar',
                    length: '30',
                    isNullable: false,
                    isUnique: true,
                },
                {
                    name: 'sigla',
                    type: 'char',
                    length: '2',
                    isNullable: false,
                    isUnique: true,
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('unidade_medida')
    }

}
