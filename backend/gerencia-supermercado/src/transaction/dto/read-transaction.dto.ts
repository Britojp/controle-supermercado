import { Transaction } from "src/database/entities/transaction.entity"

export class readTransactionDTO{
    id: number
    quantidade: number
    data: Date
    preco: number
    usuario:{
        nome: string
        email: string
    }
    fornecedor: {
        nome: string
    }
    tipo_transacao: string
    produto: {
        nome: string
    }

    constructor( entity: Transaction){
        this.id = entity.id;
        this.tipo_transacao = entity.tipo_transacao;
        this.quantidade = entity.quantidade;
        this.preco = entity.preco;
        this.produto = {
            nome: entity.produto.nome
        };
        this.fornecedor = {
            nome: entity.fornecedor.nome
        };
        this.usuario = {
            nome: entity.usuario.nome,
            email: entity.usuario.email
        };
    }

}