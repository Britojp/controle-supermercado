import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class StockLocation1746714987549 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "localizacao_estoque",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()',
                },
                {
                    name: "id_lote",
                    type: "uuid",
                },
                {
                    name: "id_prateleira",
                    type: "uuid",
                },
                {
                    name: "id_corredor",
                    type: "uuid",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ]
        }));

        await queryRunner.createForeignKey("localizacao_estoque", new TableForeignKey({
            columnNames: ["id_lote"],
            referencedTableName: "lote",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("localizacao_estoque", new TableForeignKey({
            columnNames: ["id_prateleira"],
            referencedTableName: "prateleira",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("localizacao_estoque", new TableForeignKey({
            columnNames: ["id_corredor"],
            referencedTableName: "corredor",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("localizacao_estoque");
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey("localizacao_estoque", foreignKey);
            }
        }
        await queryRunner.dropTable("localizacao_estoque");
    }
}
