import { BaseSeed } from '../base.seed';

export class ShelvesSeed extends BaseSeed {
  async run(): Promise<void> {
    const shelves = [
      'P01', 'P02', 'P03', 'P04', 'P05',
      'P06', 'P07', 'P08', 'P09', 'P10'
    ];

    let inserted = 0;
    for (const shelf of shelves) {
      const exists = await this.checkIfExists('shelves', 'name = $1', [shelf]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO shelves (name) VALUES ($1)',
          [shelf]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} prateleiras inseridas`);
    } else {
      console.log('Todas as prateleiras já existem');
    }
  }
} 