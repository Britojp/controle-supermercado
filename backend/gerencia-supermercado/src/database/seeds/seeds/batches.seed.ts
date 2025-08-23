import { BaseSeed } from '../base.seed';

export class BatchesSeed extends BaseSeed {
  async run(): Promise<void> {
    const batches = [
      { numero: 'L001', data_validade: '2025-04-01', quantidade: 100, product_name: 'Arroz' },
      { numero: 'L002', data_validade: '2025-06-15', quantidade: 200, product_name: 'Feijão Carioca' },
      { numero: 'L003', data_validade: '2025-05-10', quantidade: 150, product_name: 'Óleo de Soja' },
      { numero: 'L004', data_validade: '2025-04-20', quantidade: 100, product_name: 'Açúcar' },
      { numero: 'L005', data_validade: '2025-08-01', quantidade: 250, product_name: 'Leite' },
      { numero: 'L006', data_validade: '2025-04-10', quantidade: 180, product_name: 'Café' },
      { numero: 'L007', data_validade: '2025-07-05', quantidade: 220, product_name: 'Macarrão Espaguete' },
      { numero: 'L008', data_validade: '2025-06-30', quantidade: 200, product_name: 'Farinha de Trigo' },
      { numero: 'L009', data_validade: '2025-09-01', quantidade: 300, product_name: 'Sabonete Neutro' },
      { numero: 'L010', data_validade: '2025-07-15', quantidade: 400, product_name: 'Detergente' }
    ];

    let inserted = 0;
    for (const batch of batches) {
      const productId = await this.getRecordId('products', 'name = $1', [batch.product_name]);
      if (!productId) {
        console.log(`Produto '${batch.product_name}' não encontrado, pulando...`);
        continue;
      }

      const exists = await this.checkIfExists('batches', 'number = $1', [batch.numero]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO batches (number, validate_date, quantity, product_id) VALUES ($1, $2, $3, $4)',
          [batch.numero, batch.data_validade, batch.quantidade, productId]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} lotes inseridos`);
    } else {
      console.log('Todos os lotes já existem');
    }
  }
} 