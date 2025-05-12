import { Product } from "src/database/entities/product.entity";

export class readProductDTO {
    id: string
    nome: string
    nutricao: {
            porcao: number
            quantidade_proteina: number
            quantidade_gordura : number
            quantidade_carboidratos: number
            unidade_medida: {
                id: string,
                nome: string
                sigla: string
                }
            }
            categoria: {
                nome: string
            }
            marca: {
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
            nome: entity.categoria.nome,
        },
        this.marca = {
            nome: entity.marca.nome
        }
    }
}