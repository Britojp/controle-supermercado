import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class StockLocations1747073502452 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(new Table({
            name: "stock_locations",
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()',
                },
                {
                    name: "id_batches",
                    type: "uuid",
                },
                {
                    name: "id_shelves",
                    type: "uuid",
                },
                {
                    name: "id_corridors",
                    type: "uuid",
                },
                {
                    name: "created_at",
                    type: "timestamp",
                    default: "now()"
                }
            ],
            foreignKeys: [
                new TableForeignKey({
                    columnNames: ["id_batches"],
                    referencedTableName: "batches",
                    referencedColumnNames: ["id"],
                    onDelete: "RESTRICT"
                }),
                new TableForeignKey({
                    columnNames: ["id_shelves"],
                    referencedTableName: "shelves",
                    referencedColumnNames: ["id"],
                    onDelete: "RESTRICT"
                }),
                new TableForeignKey({
                    columnNames: ["id_corridors"],
                    referencedTableName: "corridors",
                    referencedColumnNames: ["id"],
                    onDelete: "RESTRICT"
                })

            ]
        }));
    }
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("stock_locations", true, true, true);
    }
}
