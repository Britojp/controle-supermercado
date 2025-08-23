import { BaseSeed } from '../base.seed';

export class CategoriesSeed extends BaseSeed {
  async run(): Promise<void> {
    const categories = [
      'Alimentos',
      'Bebidas',
      'Laticínios',
      'Cafés e chás',
      'Massas',
      'Padaria',
      'Higiene pessoal',
      'Limpeza',
      'Congelados',
      'Pet Shop'
    ];

    let inserted = 0;
    for (const category of categories) {
      const exists = await this.checkIfExists('categories', 'name = $1', [category]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO categories (name) VALUES ($1)',
          [category]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} categorias inseridas`);
    } else {
      console.log('Todas as categorias já existem');
    }
  }
} 