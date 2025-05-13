import { MigrationInterface, QueryRunner, Table, TableCheck, TableForeignKey } from "typeorm";

export class Transactions1747073442693 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
      DO $$
      BEGIN
        IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'transaction_type_enum') THEN
          CREATE TYPE "transaction_type_enum" AS ENUM ('ENTRADA', 'SAIDA');
        END IF;
      END$$;
    `);

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
            name: 'transaction_type',
            type: 'transaction_type_enum',
            isNullable: false,
          },
          {
            name: 'quantity',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'transaction_date',
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
            name: 'id_users',
            type: 'uuid',
          },
          {
            name: 'id_suppliers',
            type: 'uuid',
          },
          {
            name: 'id_products',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
        foreignKeys: [
          new TableForeignKey({
            name: 'fk_transactions_users',
            columnNames: ['id_users'],
            referencedTableName: 'users',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
          }),
          new TableForeignKey({
            name: 'fk_transactions_suppliers',
            columnNames: ['id_suppliers'],
            referencedTableName: 'suppliers',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
          }),
          new TableForeignKey({
            name: 'fk_transactions_products',
            columnNames: ['id_products'],
            referencedTableName: 'products',
            referencedColumnNames: ['id'],
            onDelete: 'RESTRICT',
          }),
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('transactions', true, true, true);
    await queryRunner.query(`DROP TYPE "transaction_type_enum"`);
  }
}
