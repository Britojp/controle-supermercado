import { Tipo_Transacao } from "src/interfaces/interfaces.types";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Transaction1746714971472 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'transacao',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'tipo_transacao',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'quantidade',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'data_transacao',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    isNullable: false,
                },
                {
                    name: 'preco',
                    type: 'numeric',
                    isNullable: false,
                },
                {
                    name: "id_usuario",
                    type: "uuid",
                },
                {
                    name: "id_fornecedor",
                    type: "uuid",
                },
                {
                    name: "id_produto",
                    type: "uuid",
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ]
            })
        )

                await queryRunner.createForeignKey("transacao", new TableForeignKey({
                    columnNames: ["id_usuario"],
                    referencedTableName: "usuario",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE"
                }));
        
                await queryRunner.createForeignKey("transacao", new TableForeignKey({
                    columnNames: ["id_fornecedor"],
                    referencedTableName: "fornecedor",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE"
                }));
        
                await queryRunner.createForeignKey("transacao", new TableForeignKey({
                    columnNames: ["id_produto"],
                    referencedTableName: "produto",
                    referencedColumnNames: ["id"],
                    onDelete: "CASCADE"
                }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("transacao");
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey("transacao", foreignKey);
            }
        }
        await queryRunner.dropTable("transacao");
    }

}
