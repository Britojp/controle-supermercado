import { BaseSeed } from '../base.seed';

export class StockLocationsSeed extends BaseSeed {
  async run(): Promise<void> {
    const stockLocations = [
      { batch_number: 'L001', shelf_name: 'P01', corridor_name: 'C01' },
      { batch_number: 'L002', shelf_name: 'P02', corridor_name: 'C02' },
      { batch_number: 'L003', shelf_name: 'P03', corridor_name: 'C03' },
      { batch_number: 'L004', shelf_name: 'P04', corridor_name: 'C04' },
      { batch_number: 'L005', shelf_name: 'P05', corridor_name: 'C05' },
      { batch_number: 'L006', shelf_name: 'P06', corridor_name: 'C06' },
      { batch_number: 'L007', shelf_name: 'P07', corridor_name: 'C07' },
      { batch_number: 'L008', shelf_name: 'P08', corridor_name: 'C08' },
      { batch_number: 'L009', shelf_name: 'P09', corridor_name: 'C09' },
      { batch_number: 'L010', shelf_name: 'P10', corridor_name: 'C10' }
    ];

    let inserted = 0;
    for (const location of stockLocations) {
      // Buscar UUIDs das tabelas relacionadas
      const batchId = await this.getRecordId('batches', 'number = $1', [location.batch_number]);
      if (!batchId) {
        console.log(`Lote '${location.batch_number}' não encontrado, pulando...`);
        continue;
      }

      const shelfId = await this.getRecordId('shelves', 'name = $1', [location.shelf_name]);
      if (!shelfId) {
        console.log(`Prateleira '${location.shelf_name}' não encontrada, pulando...`);
        continue;
      }

      const corridorId = await this.getRecordId('corridors', 'name = $1', [location.corridor_name]);
      if (!corridorId) {
        console.log(`Corredor '${location.corridor_name}' não encontrado, pulando...`);
        continue;
      }

      const exists = await this.checkIfExists('stock_locations', 'id_batches = $1 AND id_shelves = $2 AND id_corridors = $3', 
        [batchId, shelfId, corridorId]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO stock_locations (id_batches, id_shelves, id_corridors) VALUES ($1, $2, $3)',
          [batchId, shelfId, corridorId]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} localizações inseridas`);
    } else {
      console.log('Todas as localizações já existem');
    }
  }
} 