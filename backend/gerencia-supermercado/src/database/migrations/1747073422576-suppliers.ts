import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Suppliers1747073422576 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);        
        await queryRunner.createTable(
            new Table(
                {
                    name: 'suppliers',
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
                            name: 'cnpj',
                            type: 'varchar',
                            length: '18',
                            isNullable: false,
                            isUnique: true,
                        },
                        {
                            name: "id_address",
                            type: "uuid",
                        },
                        {
                            name: "id_contacts",
                            type: "uuid",
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp',
                            default: 'now()',
                        }
                    ],
                    foreignKeys: [
                        new TableForeignKey({
                            columnNames: ["id_address"],
                            referencedTableName: "address",
                            referencedColumnNames: ["id"],
                            onDelete: "RESTRICT"
                        }),
                        new TableForeignKey({
                            columnNames: ["id_contacts"],
                            referencedTableName: "contacts",
                            referencedColumnNames: ["id"],
                            onDelete: "RESTRICT"
                        })
                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("suppliers", true, true, true);
    }

}
