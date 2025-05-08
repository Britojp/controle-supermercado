import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Supplier1746714980853 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'fonecedor',
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
                            name: 'cnpj',
                            type: 'varchar',
                            length: '14',
                            isNullable: false,
                            isUnique: true,
                        },
                        {
                            name: "id_endereco",
                            type: "uuid",
                        },
                        {
                            name: "id_contato",
                            type: "uuid",
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
            )
        )

                await queryRunner.createForeignKey("fornecedor", new TableForeignKey({
                    columnNames: ["id_endereco"],
                    referencedTableName: "endereco",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE"
                }));
        
                await queryRunner.createForeignKey("fornecedor", new TableForeignKey({
                    columnNames: ["id_contato"],
                    referencedTableName: "contato",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE"
                }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("fornecedor");
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey("fornecedor", foreignKey);
            }
        }
        await queryRunner.dropTable("fornecedor");
    }

}
