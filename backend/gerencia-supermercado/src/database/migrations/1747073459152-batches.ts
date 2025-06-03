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
          name: 'number',
          type: 'varchar',
          length: '30',
          isNullable: false
        },
        {
          name: 'validate_date',
          type: 'timestamp',
          isNullable: true,
        },
        {
          name: 'quantity',
          type: 'integer',
          isNullable: false,
        },
        {
          name: 'product_id',
          type: 'uuid',
          isNullable: true,
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        }
      ],
      foreignKeys: [
        new TableForeignKey({
          columnNames: ["product_id"],
          referencedTableName: "products",
          referencedColumnNames: ["id"],
        }),
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("batches", true, true, true);
  }
}
