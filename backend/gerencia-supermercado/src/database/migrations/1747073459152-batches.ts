import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Batches1747073459152 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: "batches",
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
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                  name: 'id_products',
                  type: 'uuid',
                  isNullable: true,
                },
                {
                  name: 'validate_date',
                  type: 'timestamp',
                  isNullable: true,
                }
                
            ],
            foreignKeys: [
              new TableForeignKey({
                  columnNames: ["id_products"],
                  referencedTableName: "products",
                  referencedColumnNames: ["id"],
              })
            ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("batches", true, true, true);
  }
}
