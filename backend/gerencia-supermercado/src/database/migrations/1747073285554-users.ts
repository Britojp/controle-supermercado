import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Users1747073285554 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(new Table({
            name: 'users',
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
                name: 'email',
                type: 'varchar',
                length: '30',
                isNullable: false
            },
            {
                name: 'password',
                type: 'varchar',
                isNullable: false,
            },
            {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()'
            }
            
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users', true, true, true);
    }

}
