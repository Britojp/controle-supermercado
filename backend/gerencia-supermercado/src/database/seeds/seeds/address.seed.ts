import { BaseSeed } from '../base.seed';

export class AddressSeed extends BaseSeed {
  async run(): Promise<void> {
    const addresses = [
      { cep: '01001000', complement: 'Galpão 1', state_uf: 'SP' },
      { cep: '30140071', complement: 'Bloco B', state_uf: 'MG' },
      { cep: '20040002', complement: 'Anexo 3', state_uf: 'RJ' },
      { cep: '40015970', complement: 'Centro', state_uf: 'BA' },
      { cep: '80010000', complement: 'Depósito', state_uf: 'PR' },
      { cep: '88010020', complement: 'Setor C', state_uf: 'SC' },
      { cep: '90010000', complement: 'Área 5', state_uf: 'RS' },
      { cep: '50010000', complement: 'Galpão Recife', state_uf: 'PE' },
      { cep: '60010000', complement: 'Zona 2', state_uf: 'CE' },
      { cep: '74000000', complement: 'Bloco Comercial', state_uf: 'GO' }
    ];

    let inserted = 0;
    for (const address of addresses) {
      const stateId = await this.getRecordId('states', 'uf = $1', [address.state_uf]);
      if (!stateId) {
        console.log(`Estado '${address.state_uf}' não encontrado, pulando...`);
        continue;
      }

      const exists = await this.checkIfExists('address', 'cep = $1 AND complement = $2', [address.cep, address.complement]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO address (cep, complement, id_states) VALUES ($1, $2, $3)',
          [address.cep, address.complement, stateId]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} endereços inseridos`);
    } else {
      console.log('Todos os endereços já existem');
    }
  }
} 