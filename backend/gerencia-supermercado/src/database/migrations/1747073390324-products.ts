import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Products1747073390324 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(
            new Table(
                {
                    name: 'products',
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
                            name: 'id_nutritions',
                            type: 'uuid',
                            isNullable: true
                        },
                                                {
                            name: 'id_categories',
                            type: 'uuid',
                            isNullable: true
                        },
                                                {
                            name: 'id_brands',
                            type: 'uuid',
                            isNullable: true
                        },
                        {
                            name: 'created_at',
                            type: 'timestamp',
                            default: 'now()',
                        },
                    ],
                    foreignKeys: [
                        new TableForeignKey ({
                            columnNames: ["id_nutritions"],
                            referencedTableName: "nutritions",
                            referencedColumnNames: ["id"],
                            onDelete: "RESTRICT"
                        }),
                        new TableForeignKey ({
                            columnNames: ["id_categories"],
                            referencedTableName: "categories",
                            referencedColumnNames: ["id"],
                            onDelete: "RESTRICT"
                        }),
                        new TableForeignKey ({
                            columnNames: ["id_brands"],
                            referencedTableName: "brands",
                            referencedColumnNames: ["id"],
                        })

                    ]
                }
            )
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("products", true, true);
    }

}
