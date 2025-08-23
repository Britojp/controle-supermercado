import { BaseSeed } from '../base.seed';

export class MeasurementsSeed extends BaseSeed {
  async run(): Promise<void> {
    const measurements = [
      { name: 'Unidade', initials: 'un' },
      { name: 'Litro', initials: 'L' },
      { name: 'Quilograma', initials: 'kg' },
      { name: 'Pacote', initials: 'pc' },
      { name: 'Caixa', initials: 'cx' },
      { name: 'Dúzia', initials: 'dz' }
    ];

    let inserted = 0;
    for (const measurement of measurements) {
      const exists = await this.checkIfExists('measurements', 'name = $1', [measurement.name]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO measurements (name, initials) VALUES ($1, $2)',
          [measurement.name, measurement.initials]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} medidas inseridas`);
    } else {
      console.log('Todas as medidas já existem');
    }
  }
} 