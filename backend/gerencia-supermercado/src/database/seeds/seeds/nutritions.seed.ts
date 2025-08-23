import { BaseSeed } from '../base.seed';

export class NutritionsSeed extends BaseSeed {
  async run(): Promise<void> {
    const nutritions = [
      { portion: 50.0, protein_quantity: 4, fatness_quantity: 1, carbohydrate_quantity: 35, measurement_name: 'Unidade' },
      { portion: 50.0, protein_quantity: 7, fatness_quantity: 0, carbohydrate_quantity: 30, measurement_name: 'Unidade' },
      { portion: 13.0, protein_quantity: 0, fatness_quantity: 9, carbohydrate_quantity: 0, measurement_name: 'Litro' },
      { portion: 5.0, protein_quantity: 0, fatness_quantity: 0, carbohydrate_quantity: 5, measurement_name: 'Unidade' },
      { portion: 200.0, protein_quantity: 6, fatness_quantity: 6, carbohydrate_quantity: 10, measurement_name: 'Caixa' },
      { portion: 40.0, protein_quantity: 1, fatness_quantity: 3, carbohydrate_quantity: 5, measurement_name: 'Unidade' },
      { portion: 80.0, protein_quantity: 2, fatness_quantity: 1, carbohydrate_quantity: 65, measurement_name: 'Unidade' },
      { portion: 60.0, protein_quantity: 2, fatness_quantity: 1, carbohydrate_quantity: 45, measurement_name: 'Unidade' },
      { portion: 85.0, protein_quantity: 0, fatness_quantity: 1, carbohydrate_quantity: 0, measurement_name: 'Quilograma' },
      { portion: 15.0, protein_quantity: 0, fatness_quantity: 0, carbohydrate_quantity: 0, measurement_name: 'Litro' }
    ];

    let inserted = 0;
    for (const nutrition of nutritions) {
      const measurementId = await this.getRecordId('measurements', 'name = $1', [nutrition.measurement_name]);
      if (!measurementId) {
        console.log(`Medida '${nutrition.measurement_name}' não encontrada, pulando...`);
        continue;
      }

      const exists = await this.checkIfExists('nutritions', 'portion = $1 AND protein_quantity = $2 AND fatness_quantity = $3 AND carbohydrate_quantity = $4 AND id_measurements = $5', 
        [nutrition.portion, nutrition.protein_quantity, nutrition.fatness_quantity, nutrition.carbohydrate_quantity, measurementId]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO nutritions (portion, protein_quantity, fatness_quantity, carbohydrate_quantity, id_measurements) VALUES ($1, $2, $3, $4, $5)',
          [nutrition.portion, nutrition.protein_quantity, nutrition.fatness_quantity, nutrition.carbohydrate_quantity, measurementId]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} nutrições inseridas`);
    } else {
      console.log('Todas as nutrições já existem');
    }
  }
} 