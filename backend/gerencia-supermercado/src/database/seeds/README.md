# Sistema de Seeds - Gerência Supermercado

Este diretório contém o sistema de seeds para popular o banco de dados com dados iniciais.

## Estrutura

```
seeds/
├── base.seed.ts              # Classe base para todos os seeds
├── run-seeds.ts              # Executor principal dos seeds
├── seeds/                    # Seeds específicos por entidade
│   ├── states.seed.ts        # Estados brasileiros
│   ├── measurements.seed.ts  # Unidades de medida
│   ├── categories.seed.ts    # Categorias de produtos
│   ├── brands.seed.ts        # Marcas
│   ├── nutritions.seed.ts    # Informações nutricionais
│   ├── address.seed.ts       # Endereços
│   ├── contacts.seed.ts      # Contatos
│   ├── suppliers.seed.ts     # Fornecedores
│   ├── products.seed.ts      # Produtos
│   ├── transactions.seed.ts  # Transações
│   ├── shelves.seed.ts       # Prateleiras
│   ├── corridors.seed.ts     # Corredores
│   ├── batches.seed.ts       # Lotes
│   └── stock-locations.seed.ts # Localizações de estoque
└── README.md                 # Esta documentação
```

## Como Usar

### 1. Execução Automática (Recomendado)

Use o script principal que configura tudo automaticamente:

```bash
./setup-database.sh
```

Este script:
- Verifica dependências
- Instala dependências NPM se necessário
- Para containers existentes
- Sobe o container PostgreSQL
- Aguarda o banco estar disponível
- Executa migrações
- Executa todos os seeds

### 2. Execução Manual

Se preferir executar manualmente:

```bash
# 1. Subir o banco
docker-compose up -d

# 2. Aguardar o banco estar disponível
# (pode levar alguns segundos)

# 3. Executar migrações
npm run migration:run

# 4. Executar seeds
npm run seed:run
```

### 3. Comandos Disponíveis

```bash
# Executar seeds
npm run seed:run

# Compilar seeds
npm run seed:build

# Setup completo do banco
npm run db:setup
```

## Dados Inseridos

O sistema insere automaticamente:

- **27 estados brasileiros** (AC, AL, AP, AM, BA, CE, DF, ES, GO, MA, MT, MS, MG, PA, PB, PR, PE, PI, RJ, RN, RS, RO, RR, SC, SP, SE, TO)
- **6 unidades de medida** (Unidade, Litro, Quilograma, Pacote, Caixa, Dúzia)
- **10 categorias** (Alimentos, Bebidas, Laticínios, Cafés e chás, Massas, Padaria, Higiene pessoal, Limpeza, Congelados, Pet Shop)
- **10 marcas** (Tio João, Kicaldo, Soya, União, Parmalat, Pilão, Renata, Dona Benta, Palmolive, Ypê)
- **10 produtos** com informações nutricionais completas
- **10 fornecedores** com endereços e contatos
- **67 transações** (entrada e saída de produtos)
- **10 prateleiras** e **10 corredores** para organização
- **10 lotes** com datas de validade
- **10 localizações de estoque** mapeando produtos

## Desenvolvimento

### Adicionar Novo Seed

1. Crie uma nova classe que estenda `BaseSeed`
2. Implemente o método `run()`
3. Adicione o seed na lista em `run-seeds.ts`

Exemplo:

```typescript
import { BaseSeed } from '../base.seed';

export class NewEntitySeed extends BaseSeed {
  async run(): Promise<void> {
    console.log('🌱 Inserindo nova entidade...');
    
    const data = [
      // seus dados aqui
    ];

    for (const item of data) {
      await this.executeQuery(
        'INSERT INTO nova_entidade (campo1, campo2) VALUES ($1, $2)',
        [item.campo1, item.campo2]
      );
    }

    console.log(`✅ ${data.length} itens inseridos com sucesso`);
  }
}
```

### Ordem de Execução

Os seeds são executados na seguinte ordem para respeitar as dependências:

1. Estados (referenciados por endereços)
2. Unidades de medida (referenciadas por nutrições)
3. Categorias (referenciadas por produtos)
4. Marcas (referenciadas por produtos)
5. Nutrições (referenciadas por produtos)
6. Endereços (referenciados por fornecedores)
7. Contatos (referenciados por fornecedores)
8. Fornecedores (referenciados por transações)
9. Produtos (referenciados por transações)
10. Transações (referenciadas por lotes)
11. Prateleiras e Corredores (referenciados por localizações)
12. Lotes (referenciados por localizações)
13. Localizações de estoque

## Troubleshooting

### Erro de Conexão

Se o banco não estiver disponível, aguarde alguns segundos e tente novamente:

```bash
# Verificar status do container
docker ps

# Ver logs do container
docker-compose logs db
```

### Erro de Dependências

Se houver problemas com dependências:

```bash
# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install
```

### Limpar Banco

Para limpar todos os dados e executar novamente:

```bash
# Parar container
docker-compose down

# Remover volume de dados
docker volume rm gerencia-supermercado_dbdata

# Executar setup novamente
./setup-database.sh
```

## Configuração do Banco

- **Host**: localhost
- **Porta**: 5433
- **Usuário**: postgres
- **Senha**: docker
- **Banco**: supermarket

## Logs

O sistema fornece logs detalhados durante a execução:

- Iniciando processo
- Inserindo estados
- Inserindo unidades de medida
- Inserindo categorias
- Inserindo marcas
- Inserindo informações nutricionais
- Inserindo endereços
- Inserindo contatos
- Inserindo fornecedores
- Inserindo produtos
- Inserindo transações
- Inserindo prateleiras
- Inserindo corredores
- Inserindo lotes
- Inserindo localizações de estoque
- Conclusão de cada etapa
- Processo finalizado 