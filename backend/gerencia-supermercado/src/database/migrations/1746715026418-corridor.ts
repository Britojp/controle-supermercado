import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Corridor1746715026418 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table(
            {
                name: 'corredor',
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
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('corredor')
    }

}
