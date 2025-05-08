import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Product1746715003403 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table(
                {
                    name: 'produto',
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
                            name: 'id_nutricao',
                            type: 'uuid',
                            isNullable: true
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

        await queryRunner.createForeignKey("produto", new TableForeignKey(
            {
                columnNames: ["id_nutricao"],
                referencedTableName: "nutricao",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE"
            }
        ))

        await queryRunner.createForeignKey("categoria", new TableForeignKey(
            {
                columnNames: ["id_categoria"],
                referencedTableName: "categoria",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE"
            }
        ))

        await queryRunner.createForeignKey("marca", new TableForeignKey(
            {
                columnNames: ["id_marca"],
                referencedTableName: "marca",
                referencedColumnNames: ["id"],
                onDelete: "CASCADE"
            }
        ))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("produto");
        if (table) {
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys) {
                await queryRunner.dropForeignKey("produto", foreignKey);
            }
        }
        await queryRunner.dropTable("produto");
    }

}
