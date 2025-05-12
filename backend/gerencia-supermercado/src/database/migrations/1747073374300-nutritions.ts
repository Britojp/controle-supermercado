import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Nutritions1747073374300 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(new Table(
            {
                name: 'nutritions',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'portion',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'protein_quantity',
                        type: 'integer',
                        isNullable: true
                    },
                    {
                        name: 'fatness_quantity',
                        type: 'integer',
                        isNullable: true
                    },
                    {
                        name: 'carbohydrate_quantity',
                        type: 'integer',
                        isNullable: true
                    },
                    {
                        name: 'id_measurements',
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
                    new TableForeignKey({
                        columnNames: ["id_measurements"],
                        referencedTableName: "measurements",
                        referencedColumnNames: ["id"],
                        onDelete: "RESTRICT"
                    })
                ]
            }    
        ));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

            await queryRunner.dropTable("nutritions", true, true, true);
    }
}
