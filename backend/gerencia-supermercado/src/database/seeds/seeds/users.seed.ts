import { BaseSeed } from "../base.seed";

export class UsersSeed extends BaseSeed {
  async run(): Promise<void> {
    const users = [
      { name: 'Pedro Brito', email: 'pedro.brito@norven.com', password: '123456',
      },
      { name: 'João Silva', email: 'joao.silva@norven.com', password: '123456',
      },
      { name: 'Maria Oliveira', email: 'maria.oliveira@norven.com', password: '123456',
      },
      { name: 'Carlos Santos', email: 'carlos.santos@norven.com', password: '123456',
      },
      { name: 'Ana Paula', email: 'ana.paula@norven.com', password: '123456',
      }
    ];


    let inserted = 0;
    for (const user of users) {
      const exists = await this.checkIfExists('users', 'email = $1', [user.email]);
      if (!exists) {
        await this.executeQuery('INSERT INTO users (name, email, password) VALUES ($1, $2, $3)', [user.name, user.email, user.password]);
        inserted++;
      }
    }

    if (inserted > 0) {
      console.log(`${inserted} usuários inseridos`);
    } else {
      console.log('Nenhum usuário inserido');
    }
  }
}