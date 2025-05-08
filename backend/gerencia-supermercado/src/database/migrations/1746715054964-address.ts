import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Address1746715054964 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(
            new Table(
                {
                    name: 'endereco',
                    columns: [
                        {
                            name: 'id',
                            type: 'uuid',
                            isPrimary: true,
                            default: 'uuid_generate_v4()',
                        },
                        {
                            name: 'cep',
                            type: 'varchar',
                            length: '8',
                            isNullable: false
                        },
                        {
                            name: 'complemento',
                            type: 'varchar',
                            length: '15',
                            isNullable: true
                        },
                        {
                            name: "id_estado",
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
                await queryRunner.createForeignKey("endereco", new TableForeignKey(
                    {
                        columnNames: ["id_estado"],
                        referencedTableName: "estado",
                        referencedColumnNames: ["id"],
                        onDelete: "CASCADE"
                    }
                ))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('endereco');
    }

}
