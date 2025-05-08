import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Batch1746715048741 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table(
                {
                    name: 'lote',
                    columns: [
                        {
                            name: 'id',
                            type: 'uuid',
                            isPrimary: true,
                            default: 'uuid_generate_v4()',
                        },
                        {
                            name: 'numero',
                            type: 'varchar',
                            isNullable: false
                        },
                        {
                            name: 'data_validade',
                            type: 'date',
                            isNullable: false
                        },
                        {
                            name: 'quantidade',
                            type: 'int',
                            isNullable: false
                        },
                        {
                            name: 'id_transacao',
                            type: 'int',
                            isNullable: true
                        },
                        {
                            name: 'id_produto',
                            type: 'int',
                            isNullable: false
                        }
                    ]
                }
            )
        )

        await queryRunner.createForeignKey("lote", new TableForeignKey(
                            {
                                columnNames: ["id_transacao"],
                                referencedTableName: "transacao",
                                referencedColumnNames: ["id"],
                                onDelete: "CASCADE"
                            }
                        ))

        await queryRunner.createForeignKey("lote", new TableForeignKey(
                            {
                                columnNames: ["id_produto"],
                                referencedTableName: "produto",
                                referencedColumnNames: ["id"],
                                onDelete: "CASCADE"
                            }
                        ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('lote');
    }
}
