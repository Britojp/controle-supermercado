import { BaseSeed } from '../base.seed';

export class CorridorsSeed extends BaseSeed {
  async run(): Promise<void> {
    const corridors = [
      'C01', 'C02', 'C03', 'C04', 'C05',
      'C06', 'C07', 'C08', 'C09', 'C10'
    ];

    let inserted = 0;
    for (const corridor of corridors) {
      const exists = await this.checkIfExists('corridors', 'name = $1', [corridor]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO corridors (name) VALUES ($1)',
          [corridor]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} corredores inseridos`);
    } else {
      console.log('Todos os corredores já existem');
    }
  }
} 