import { Tipo_Transacao } from "src/interfaces/interfaces.types";
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Transactions1747073442693 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
            name: 'transactions',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'type_transaction',
                    type: 'varchar',
                    isNullable: false
                },
                {
                    name: 'quantity',
                    type: 'int',
                    isNullable: false
                },
                {
                    name: 'date',
                    type: 'timestamp',
                    default: 'CURRENT_TIMESTAMP',
                    isNullable: false,
                },
                {
                    name: 'price',
                    type: 'numeric',
                    isNullable: false,
                },
                {
                    name: "id_users",
                    type: "uuid",
                },
                {
                    name: "id_suppliers",
                    type: "uuid",
                },
                {
                    name: "id_products",
                    type: "uuid",
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
            ],
            foreignKeys: [
                new TableForeignKey({
                    name: 'id_users',
                    columnNames: ["id_users"],
                    referencedTableName: "users",
                    referencedColumnNames: ["id"],
                    onDelete: "RESTRICT"
                }),
                new TableForeignKey({
                    columnNames: ["id_suppliers"],
                    referencedTableName: "suppliers",
                    referencedColumnNames: ["id"],
                    onDelete: "RESTRICT"
                }),
                new TableForeignKey({
                    columnNames: ["id_products"],
                    referencedTableName: "products",
                    referencedColumnNames: ["id"],
                    onDelete: "RESTRICT"
                })
            ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("transactions", true, true, true);
    }

}
