import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Address1747073409336 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(
            new Table(
                {
                    name: 'address',
                    columns: [
                        {
                            name: 'id',
                            type: 'uuid',
                            isPrimary: true,
                            default: 'uuid_generate_v4()',
                        },
                        {
                            name: 'cep',
                            type: 'varchar',
                            length: '9',
                            isNullable: false
                        },
                        {
                            name: 'complement',
                            type: 'varchar',
                            length: '30',
                            isNullable: true
                        },
                        {
                            name: "id_states",
                            type: "uuid",
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp',
                            default: 'now()',
                        },
                    ],
                    foreignKeys: [
                        new TableForeignKey ({
                        columnNames: ["id_states"],
                        referencedTableName: "states",
                        referencedColumnNames: ["id"],
                        onDelete: "RESTRICT"
                        })
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('address', true, true, true);
    }

}
