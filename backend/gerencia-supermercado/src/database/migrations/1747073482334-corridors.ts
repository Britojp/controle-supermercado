import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Corridors1747073482334 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table(
            {
                name: 'corridors',
                columns: [
                    {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'name',
                    type: 'varchar',
                    length: '30',
                    isNullable: false
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                
            ],
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('corridors', true, true, true)
    }

}
