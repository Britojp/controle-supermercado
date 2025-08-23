import { BaseSeed } from '../base.seed';

export class SuppliersSeed extends BaseSeed {
  async run(): Promise<void> {
    const suppliers = [
      { name: 'Distribuidora Alimentos SP', cnpj: '12345678000100', cep: '01001000', complement: 'Galpão 1', tel_number: '11999990000' },
      { name: 'Atacado Nacional MG', cnpj: '12345678000200', cep: '30140071', complement: 'Bloco B', tel_number: '31999990001' },
      { name: 'Comercial Soya Ltda', cnpj: '12345678000300', cep: '20040002', complement: 'Anexo 3', tel_number: '21999990002' },
      { name: 'Distribuidora União', cnpj: '12345678000400', cep: '40015970', complement: 'Centro', tel_number: '71999990003' },
      { name: 'Laticínios Parmalat', cnpj: '12345678000500', cep: '80010000', complement: 'Depósito', tel_number: '41999990004' },
      { name: 'Café Pilão Indústrias', cnpj: '12345678000600', cep: '88010020', complement: 'Setor C', tel_number: '48999990005' },
      { name: 'Massas Renata SA', cnpj: '12345678000700', cep: '90010000', complement: 'Área 5', tel_number: '51999990006' },
      { name: 'Dona Benta Alimentos', cnpj: '12345678000800', cep: '50010000', complement: 'Galpão Recife', tel_number: '81999990007' },
      { name: 'Colgate-Palmolive', cnpj: '12345678000900', cep: '60010000', complement: 'Zona 2', tel_number: '85999990008' },
      { name: 'Química Ypê', cnpj: '12345678001000', cep: '74000000', complement: 'Bloco Comercial', tel_number: '62999990009' }
    ];

    let inserted = 0;
    for (const supplier of suppliers) {
      const addressId = await this.getRecordId('address', 'cep = $1 AND complement = $2', [supplier.cep, supplier.complement]);
      const contactId = await this.getRecordId('contacts', 'tel_number = $1', [supplier.tel_number]);
      
      if (!addressId || !contactId) {
        console.log(`Endereço ou contato não encontrado para ${supplier.name}, pulando...`);
        continue;
      }

      const exists = await this.checkIfExists('suppliers', 'cnpj = $1', [supplier.cnpj]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO suppliers (name, cnpj, id_address, id_contacts) VALUES ($1, $2, $3, $4)',
          [supplier.name, supplier.cnpj, addressId, contactId]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} fornecedores inseridos`);
    } else {
      console.log('Todos os fornecedores já existem');
    }
  }
} 