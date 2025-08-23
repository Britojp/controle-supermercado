import { BaseSeed } from '../base.seed';

export class TransactionsSeed extends BaseSeed {
  async run(): Promise<void> {
    const transactions = [
      { tipo_transacao: 'ENTRADA', quantidade: 500, data_transacao: '2024-01-01', preco: 17.00, supplier_cnpj: '12345678000100', product_name: 'Arroz' },
      { tipo_transacao: 'ENTRADA', quantidade: 300, data_transacao: '2024-02-01', preco: 5.50, supplier_cnpj: '12345678000200', product_name: 'Feijão Carioca' },
      { tipo_transacao: 'ENTRADA', quantidade: 350, data_transacao: '2024-03-01', preco: 5.50, supplier_cnpj: '12345678000200', product_name: 'Feijão Carioca' },
      { tipo_transacao: 'ENTRADA', quantidade: 300, data_transacao: '2024-04-01', preco: 5.00, supplier_cnpj: '12345678000200', product_name: 'Feijão Carioca' },
      { tipo_transacao: 'ENTRADA', quantidade: 150, data_transacao: '2024-03-01', preco: 4.90, supplier_cnpj: '12345678000300', product_name: 'Óleo de Soja' },
      { tipo_transacao: 'ENTRADA', quantidade: 100, data_transacao: '2024-04-01', preco: 3.20, supplier_cnpj: '12345678000400', product_name: 'Açúcar' },
      { tipo_transacao: 'ENTRADA', quantidade: 100, data_transacao: '2024-05-01', preco: 5.20, supplier_cnpj: '12345678000400', product_name: 'Açúcar' },
      { tipo_transacao: 'ENTRADA', quantidade: 250, data_transacao: '2024-05-01', preco: 3.89, supplier_cnpj: '12345678000500', product_name: 'Leite' },
      { tipo_transacao: 'ENTRADA', quantidade: 180, data_transacao: '2024-06-01', preco: 12.00, supplier_cnpj: '12345678000600', product_name: 'Café' },
      { tipo_transacao: 'ENTRADA', quantidade: 220, data_transacao: '2024-07-01', preco: 2.50, supplier_cnpj: '12345678000700', product_name: 'Macarrão Espaguete' },
      { tipo_transacao: 'ENTRADA', quantidade: 200, data_transacao: '2024-08-01', preco: 4.70, supplier_cnpj: '12345678000800', product_name: 'Farinha de Trigo' },
      { tipo_transacao: 'ENTRADA', quantidade: 300, data_transacao: '2024-09-01', preco: 1.20, supplier_cnpj: '12345678000900', product_name: 'Sabonete Neutro' },
      { tipo_transacao: 'ENTRADA', quantidade: 400, data_transacao: '2024-10-01', preco: 1.99, supplier_cnpj: '12345678001000', product_name: 'Detergente' },
      
      { tipo_transacao: 'SAIDA', quantidade: 10, data_transacao: '2024-04-01', preco: 22.90, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 20, data_transacao: '2024-04-02', preco: 7.49, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 31, data_transacao: '2024-04-03', preco: 7.49, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 32, data_transacao: '2024-04-04', preco: 14.99, product_name: 'Café' },
      { tipo_transacao: 'SAIDA', quantidade: 15, data_transacao: '2024-04-05', preco: 3.49, product_name: 'Macarrão Espaguete' },
      { tipo_transacao: 'SAIDA', quantidade: 6, data_transacao: '2024-07-16', preco: 3.49, product_name: 'Macarrão Espaguete' },
      { tipo_transacao: 'SAIDA', quantidade: 6, data_transacao: '2024-09-14', preco: 1.99, product_name: 'Sabonete Neutro' },
      { tipo_transacao: 'SAIDA', quantidade: 9, data_transacao: '2024-02-15', preco: 14.99, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 2, data_transacao: '2024-01-05', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 9, data_transacao: '2024-02-09', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 6, data_transacao: '2024-03-21', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 10, data_transacao: '2024-04-02', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 5, data_transacao: '2024-05-01', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 2, data_transacao: '2024-06-09', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 4, data_transacao: '2024-09-11', preco: 1.99, product_name: 'Sabonete Neutro' },
      { tipo_transacao: 'SAIDA', quantidade: 5, data_transacao: '2024-07-21', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 45, data_transacao: '2024-08-30', preco: 5.59, product_name: 'Farinha de Trigo' },
      { tipo_transacao: 'SAIDA', quantidade: 36, data_transacao: '2024-09-09', preco: 1.99, product_name: 'Sabonete Neutro' },
      { tipo_transacao: 'SAIDA', quantidade: 27, data_transacao: '2024-06-25', preco: 14.99, product_name: 'Café' },
      { tipo_transacao: 'SAIDA', quantidade: 19, data_transacao: '2024-07-27', preco: 3.49, product_name: 'Macarrão Espaguete' },
      { tipo_transacao: 'SAIDA', quantidade: 36, data_transacao: '2024-02-09', preco: 7.49, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 25, data_transacao: '2024-03-25', preco: 7.49, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 18, data_transacao: '2024-01-17', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 38, data_transacao: '2024-02-23', preco: 7.49, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 25, data_transacao: '2024-03-11', preco: 7.49, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 61, data_transacao: '2024-07-16', preco: 3.49, product_name: 'Macarrão Espaguete' },
      { tipo_transacao: 'SAIDA', quantidade: 6, data_transacao: '2024-09-14', preco: 1.99, product_name: 'Sabonete Neutro' },
      { tipo_transacao: 'SAIDA', quantidade: 19, data_transacao: '2024-02-15', preco: 3.49, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 12, data_transacao: '2024-01-05', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 19, data_transacao: '2024-02-09', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 11, data_transacao: '2024-03-21', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 20, data_transacao: '2024-04-02', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 61, data_transacao: '2024-05-01', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 12, data_transacao: '2024-06-09', preco: 22.9, product_name: 'Arroz' },
      { tipo_transacao: 'SAIDA', quantidade: 54, data_transacao: '2024-09-11', preco: 1.99, product_name: 'Sabonete Neutro' },
      { tipo_transacao: 'SAIDA', quantidade: 54, data_transacao: '2024-02-21', preco: 7.49, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 25, data_transacao: '2024-08-30', preco: 5.59, product_name: 'Farinha de Trigo' },
      { tipo_transacao: 'SAIDA', quantidade: 16, data_transacao: '2024-09-09', preco: 1.99, product_name: 'Sabonete Neutro' },
      { tipo_transacao: 'SAIDA', quantidade: 27, data_transacao: '2024-06-25', preco: 14.99, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 69, data_transacao: '2024-07-27', preco: 3.49, product_name: 'Macarrão Espaguete' },
      { tipo_transacao: 'SAIDA', quantidade: 56, data_transacao: '2024-02-09', preco: 7.49, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 51, data_transacao: '2024-03-25', preco: 7.49, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 38, data_transacao: '2024-04-17', preco: 7.49, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 38, data_transacao: '2024-05-23', preco: 7.49, product_name: 'Feijão Carioca' },
      { tipo_transacao: 'SAIDA', quantidade: 35, data_transacao: '2024-06-11', preco: 7.49, product_name: 'Feijão Carioca' }
    ];

    let inserted = 0;
    for (const transaction of transactions) {
      let supplierId: string | null = null;
      if (transaction.supplier_cnpj) {
        supplierId = await this.getRecordId('suppliers', 'cnpj = $1', [transaction.supplier_cnpj]);
        if (!supplierId) {
          console.log(`Fornecedor com CNPJ '${transaction.supplier_cnpj}' não encontrado, pulando...`);
          continue;
        }
      } else {
        // Para transações de SAIDA sem fornecedor, usar um fornecedor padrão
        supplierId = await this.getRecordId('suppliers', 'cnpj = $1', ['12345678000100']);
        if (!supplierId) {
          console.log('Fornecedor padrão não encontrado, pulando transação...');
          continue;
        }
      }

      const productId = await this.getRecordId('products', 'name = $1', [transaction.product_name]);
      if (!productId) {
        console.log(`Produto '${transaction.product_name}' não encontrado, pulando...`);
        continue;
      }

      // Buscar um usuário válido para usar nas transações
      const userId = await this.getRecordId('users', 'email = $1', ['pedro.brito@norven.com']);
      if (!userId) {
        console.log('Usuário não encontrado, pulando transação...');
        continue;
      }

      const exists = await this.checkIfExists('transactions', 'transaction_type = $1 AND quantity = $2 AND transaction_date = $3 AND price = $4 AND id_suppliers = $5 AND id_products = $6', 
        [transaction.tipo_transacao, transaction.quantidade, transaction.data_transacao, transaction.preco, supplierId || null, productId]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO transactions (transaction_type, quantity, transaction_date, price, id_users, id_suppliers, id_products) VALUES ($1, $2, $3, $4, $5, $6, $7)',
          [
            transaction.tipo_transacao,
            transaction.quantidade,
            transaction.data_transacao,
            transaction.preco,
            userId, // Usar usuário válido
            supplierId || null,
            productId
          ]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} transações inseridas`);
    } else {
      console.log('Todas as transações já existem');
    }
  }
} 