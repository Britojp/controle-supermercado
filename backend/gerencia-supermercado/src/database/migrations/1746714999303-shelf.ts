import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Shelf1746714999303 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(
            new Table(
                {
                name: 'prateleira',
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
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ]
        }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('prateleira')
    }

}
