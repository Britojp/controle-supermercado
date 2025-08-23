import { BaseSeed } from '../base.seed';

export class BrandsSeed extends BaseSeed {
  async run(): Promise<void> {
    const brands = [
      'Tio João',
      'Kicaldo',
      'Soya',
      'União',
      'Parmalat',
      'Pilão',
      'Renata',
      'Dona Benta',
      'Palmolive',
      'Ypê'
    ];

    let inserted = 0;
    for (const brand of brands) {
      const exists = await this.checkIfExists('brands', 'name = $1', [brand]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO brands (name) VALUES ($1)',
          [brand]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} marcas inseridas`);
    } else {
      console.log('Todas as marcas já existem');
    }
  }
} 