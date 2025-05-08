import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class User1746714963417 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        await queryRunner.createTable(new Table({
            name: 'usuario',
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
                name: 'email',
                type: 'varchar',
                length: '30',
                isNullable: false
            },
            {
                name: 'senha',
                type: 'varchar',
                length: '30',
                isNullable: false,
                isUnique: true,
            },
            
        ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('usuario');
    }

}
