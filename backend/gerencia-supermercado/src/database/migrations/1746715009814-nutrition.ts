import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class Nutrition1746715009814 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(new Table(
            {
                name: 'nutricao',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'porcao',
                        type: 'float',
                        isNullable: true
                    },
                    {
                        name: 'quantidade_proteina',
                        type: 'integer',
                        isNullable: true
                    },
                    {
                        name: 'quantidade_gordura',
                        type: 'integer',
                        isNullable: true
                    },
                    {
                        name: 'quantidade_carboidratos',
                        type: 'integer',
                        isNullable: true
                    },
                    {
                        name: 'id_unidade_medida',
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
        ));

        await queryRunner.createForeignKey("nutricao", new TableForeignKey({
            columnNames: ["id_unidade_medida"],
            referencedTableName: "unidade_medida",
            referencedColumnNames: ["id"],
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("nutricao");
        if(table){
            const foreignKeys = table.foreignKeys;
            for (const foreignKey of foreignKeys){
                await queryRunner.dropForeignKey("nutricao", foreignKey);
            }
            await queryRunner.dropTable("nutricao");
        }
    }
}
