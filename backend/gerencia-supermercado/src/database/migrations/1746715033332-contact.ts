import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Contact1746715033332 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(new Table(
            {
                name: 'contato',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'telefone',
                        type: 'varchar',
                        length: '11',
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
        ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('contato');
    }
}
