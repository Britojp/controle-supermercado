import { BaseSeed } from '../base.seed';

export class StatesSeed extends BaseSeed {
  async run(): Promise<void> {
    const states = [
      { name: 'Acre', uf: 'AC' },
      { name: 'Alagoas', uf: 'AL' },
      { name: 'Amapá', uf: 'AP' },
      { name: 'Amazonas', uf: 'AM' },
      { name: 'Bahia', uf: 'BA' },
      { name: 'Ceará', uf: 'CE' },
      { name: 'Distrito Federal', uf: 'DF' },
      { name: 'Espírito Santo', uf: 'ES' },
      { name: 'Goiás', uf: 'GO' },
      { name: 'Maranhão', uf: 'MA' },
      { name: 'Mato Grosso', uf: 'MT' },
      { name: 'Mato Grosso do Sul', uf: 'MS' },
      { name: 'Minas Gerais', uf: 'MG' },
      { name: 'Pará', uf: 'PA' },
      { name: 'Paraíba', uf: 'PB' },
      { name: 'Paraná', uf: 'PR' },
      { name: 'Pernambuco', uf: 'PE' },
      { name: 'Piauí', uf: 'PI' },
      { name: 'Rio de Janeiro', uf: 'RJ' },
      { name: 'Rio Grande do Norte', uf: 'RN' },
      { name: 'Rio Grande do Sul', uf: 'RS' },
      { name: 'Rondônia', uf: 'RO' },
      { name: 'Roraima', uf: 'RR' },
      { name: 'Santa Catarina', uf: 'SC' },
      { name: 'São Paulo', uf: 'SP' },
      { name: 'Sergipe', uf: 'SE' },
      { name: 'Tocantins', uf: 'TO' }
    ];

    let inserted = 0;
    for (const state of states) {
      const exists = await this.checkIfExists('states', 'name = $1', [state.name]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO states (name, uf) VALUES ($1, $2)',
          [state.name, state.uf]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} estados inseridos`);
    } else {
      console.log('Todos os estados já existem');
    }
  }
} 