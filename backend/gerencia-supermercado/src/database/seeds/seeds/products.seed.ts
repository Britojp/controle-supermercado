import { BaseSeed } from '../base.seed';

export class ProductsSeed extends BaseSeed {
  async run(): Promise<void> {
    const products = [
      { nome: 'Arroz', preco_venda: 22.90, nutrition_portion: 50.0, nutrition_protein: 4, nutrition_fat: 1, nutrition_carb: 35, category_name: 'Alimentos', brand_name: 'Tio João' },
      { nome: 'Feijão Carioca', preco_venda: 7.49, nutrition_portion: 50.0, nutrition_protein: 7, nutrition_fat: 0, nutrition_carb: 30, category_name: 'Alimentos', brand_name: 'Kicaldo' },
      { nome: 'Óleo de Soja', preco_venda: 6.79, nutrition_portion: 13.0, nutrition_protein: 0, nutrition_fat: 9, nutrition_carb: 0, category_name: 'Bebidas', brand_name: 'Soya' },
      { nome: 'Açúcar', preco_venda: 4.29, nutrition_portion: 5.0, nutrition_protein: 0, nutrition_fat: 0, nutrition_carb: 5, category_name: 'Alimentos', brand_name: 'União' },
      { nome: 'Leite', preco_venda: 4.89, nutrition_portion: 200.0, nutrition_protein: 6, nutrition_fat: 6, nutrition_carb: 10, category_name: 'Laticínios', brand_name: 'Parmalat' },
      { nome: 'Café', preco_venda: 14.99, nutrition_portion: 40.0, nutrition_protein: 1, nutrition_fat: 3, nutrition_carb: 5, category_name: 'Cafés e chás', brand_name: 'Pilão' },
      { nome: 'Macarrão Espaguete', preco_venda: 3.49, nutrition_portion: 80.0, nutrition_protein: 2, nutrition_fat: 1, nutrition_carb: 65, category_name: 'Massas', brand_name: 'Renata' },
      { nome: 'Farinha de Trigo', preco_venda: 5.59, nutrition_portion: 60.0, nutrition_protein: 2, nutrition_fat: 1, nutrition_carb: 45, category_name: 'Padaria', brand_name: 'Dona Benta' },
      { nome: 'Sabonete Neutro', preco_venda: 1.99, nutrition_portion: 85.0, nutrition_protein: 0, nutrition_fat: 1, nutrition_carb: 0, category_name: 'Higiene pessoal', brand_name: 'Palmolive' },
      { nome: 'Detergente', preco_venda: 2.89, nutrition_portion: 15.0, nutrition_protein: 0, nutrition_fat: 0, nutrition_carb: 0, category_name: 'Limpeza', brand_name: 'Ypê' }
    ];

    let inserted = 0;
    for (const product of products) {
      const nutritionId = await this.getRecordId('nutritions', 'portion = $1 AND protein_quantity = $2 AND fatness_quantity = $3 AND carbohydrate_quantity = $4', 
        [product.nutrition_portion, product.nutrition_protein, product.nutrition_fat, product.nutrition_carb]);
      const categoryId = await this.getRecordId('categories', 'name = $1', [product.category_name]);
      const brandId = await this.getRecordId('brands', 'name = $1', [product.brand_name]);
      
      if (!nutritionId || !categoryId || !brandId) {
        console.log(`Nutrição, categoria ou marca não encontrada para ${product.nome}, pulando...`);
        continue;
      }

      const exists = await this.checkIfExists('products', 'name = $1', [product.nome]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO products (name, id_nutritions, id_categories, id_brands) VALUES ($1, $2, $3, $4)',
          [product.nome, nutritionId, categoryId, brandId]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} produtos inseridos`);
    } else {
      console.log('Todos os produtos já existem');
    }
  }
} 