import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class States1747073297712 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(new Table(
            {
                name: 'states',
                columns : [
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
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ]
            }
        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('states', true, true, true)
    }
}
