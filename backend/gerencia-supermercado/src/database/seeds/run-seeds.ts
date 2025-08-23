import { DataSource } from 'typeorm';
import { seedDataSource } from './seed-cli-config';
import {
  StatesSeed,
  MeasurementsSeed,
  CategoriesSeed,
  BrandsSeed,
  NutritionsSeed,
  AddressSeed,
  ContactsSeed,
  SuppliersSeed,
  ProductsSeed,
  TransactionsSeed,
  ShelvesSeed,
  CorridorsSeed,
  BatchesSeed,
  StockLocationsSeed
} from './seeds';
import { UsersSeed } from './seeds/users.seed';

export class SeedRunner {
  private dataSource: DataSource;

  constructor() {
    this.dataSource = seedDataSource;
  }

  async run(): Promise<void> {
    try {
      console.log('Iniciando processo de seed...');
      
      await this.dataSource.initialize();
      console.log('Conexão com banco estabelecida');

      const seeds = [
        new UsersSeed(this.dataSource),
        new StatesSeed(this.dataSource),
        new MeasurementsSeed(this.dataSource),
        new CategoriesSeed(this.dataSource),
        new BrandsSeed(this.dataSource),
        new NutritionsSeed(this.dataSource),
        new AddressSeed(this.dataSource),
        new ContactsSeed(this.dataSource),
        new SuppliersSeed(this.dataSource),
        new ProductsSeed(this.dataSource),
        new TransactionsSeed(this.dataSource),
        new ShelvesSeed(this.dataSource),
        new CorridorsSeed(this.dataSource),
        new BatchesSeed(this.dataSource),
        new StockLocationsSeed(this.dataSource),
      ];

      for (const seed of seeds) {
        console.log(`Executando seed: ${seed.constructor.name}`);
        await seed.run();
        console.log(`${seed.constructor.name} concluído`);
      }

      console.log('Todos os seeds foram executados com sucesso!');
    } catch (error) {
      console.error('Erro durante execução dos seeds:', error);
      throw error;
    } finally {
      if (this.dataSource.isInitialized) {
        await this.dataSource.destroy();
      }
    }
  }
}

if (require.main === module) {
  const runner = new SeedRunner();
  runner.run()
    .then(() => {
      console.log('Seeds executados com sucesso');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Falha na execução dos seeds:', error);
      process.exit(1);
    });
} 