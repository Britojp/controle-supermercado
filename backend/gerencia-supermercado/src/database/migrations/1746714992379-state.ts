import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class State1746714992379 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(new Table(
            {
                name: 'estado',
                columns : [
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
                        name: 'uf',
                        type: 'char',
                        length: '2',
                        isNullable: false,
                        isUnique: true,
                    },
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('estado')
    }
}
