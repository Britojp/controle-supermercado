import { Product } from "src/database/entities/product.entity";

export class readProductDTO {
    id: number
    nome: string
    nutricao: {
            porcao: number
            quantidade_proteina: number
            quantidade_gordura : number
            quantidade_carboidratos: number
            unidade_medida: {
                id: number,
                nome: string
                sigla: string
                }
            }
            categoria: {
                id: number
                nome: string
            }
            marca: {
                id: number
                nome: string
            }
    
    constructor(entity:Product) {
        this.id = entity.id
        this.nome = entity.nome
        this.nutricao = {
            porcao: entity.nutricao?.porcao,
            quantidade_proteina: entity.nutricao.quantidade_proteina,
            quantidade_gordura: entity.nutricao.quantidade_gordura,
            quantidade_carboidratos: entity.nutricao.quantidade_carboidrato,
            unidade_medida: {
                id: entity.nutricao.id,
                nome: entity.nutricao.unidademedida.nome,
                sigla: entity.nutricao.unidademedida.sigla,
            },
        };
        this.categoria = {
            id: entity.categoria.id,
            nome: entity.categoria.nome,
        },
        this.marca = {
            id: entity.categoria.id,
            nome: entity.marca.nome
        }
    }
}