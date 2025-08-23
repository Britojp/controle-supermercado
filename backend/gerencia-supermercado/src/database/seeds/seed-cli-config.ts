import { DataSource } from 'typeorm';
import { dataSourceOptions } from '../database.module';

export const seedDataSource = new DataSource({
  ...dataSourceOptions,
  synchronize: false,
  migrations: [],
  entities: [
    'src/database/entities/*.entity.ts'
  ]
}); 