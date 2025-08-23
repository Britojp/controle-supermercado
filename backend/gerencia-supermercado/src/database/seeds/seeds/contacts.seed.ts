import { BaseSeed } from '../base.seed';

export class ContactsSeed extends BaseSeed {
  async run(): Promise<void> {
    const contacts = [
      '11999990000',
      '31999990001',
      '21999990002',
      '71999990003',
      '41999990004',
      '48999990005',
      '51999990006',
      '81999990007',
      '85999990008',
      '62999990009'
    ];

    let inserted = 0;
    for (const contact of contacts) {
      const exists = await this.checkIfExists('contacts', 'tel_number = $1', [contact]);
      if (!exists) {
        await this.executeQuery(
          'INSERT INTO contacts (tel_number) VALUES ($1)',
          [contact]
        );
        inserted++;
      }
    }
    
    if (inserted > 0) {
      console.log(`${inserted} contatos inseridos`);
    } else {
      console.log('Todos os contatos já existem');
    }
  }
} 