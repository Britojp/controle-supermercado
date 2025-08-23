import { DataSource } from 'typeorm';

export abstract class BaseSeed {
  protected dataSource: DataSource;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  abstract run(): Promise<void>;

  protected async clearTable(tableName: string): Promise<void> {
    try {
      await this.dataSource.query(`TRUNCATE TABLE ${tableName} RESTART IDENTITY CASCADE`);
      console.log(`Tabela ${tableName} limpa`);
    } catch (error) {
      console.log(`Não foi possível limpar a tabela ${tableName}:`, error.message);
    }
  }

  protected async executeQuery(query: string, params?: any[]): Promise<any> {
    try {
      const result = await this.dataSource.query(query, params);
      return result;
    } catch (error) {
      if (error.code === '23505') {
        console.log('Dados já existem, pulando inserção...');
        return null;
      }
      console.error(`Erro na query: ${query}`, error);
      throw error;
    }
  }

  protected async executeMultipleQueries(queries: string[]): Promise<void> {
    for (const query of queries) {
      await this.executeQuery(query);
    }
  }

  protected async checkIfExists(tableName: string, condition: string, params: any[]): Promise<boolean> {
    try {
      const result = await this.dataSource.query(`SELECT COUNT(*) FROM ${tableName} WHERE ${condition}`, params);
      return parseInt(result[0].count) > 0;
    } catch (error) {
      return false;
    }
  }

  protected async getRecordId(tableName: string, condition: string, params: any[]): Promise<string | null> {
    try {
      const result = await this.dataSource.query(`SELECT id FROM ${tableName} WHERE ${condition}`, params);
      return result.length > 0 ? result[0].id : null;
    } catch (error) {
      return null;
    }
  }
} 