import { Supplier } from "src/database/entities/supplier.entity";

export class readSupplierDTO {
    id: number;
    nome: string;
    cnpj: string;
    endereco: {
      cep: string;
      complemento: string;
      estado: {
        nome: string;
        uf: string;
      }
    };
    contato: {
      numero: string;
    };
    constructor(entity: Supplier) {
        this.id = entity.id;
        this.nome = entity.nome;
        this.cnpj = entity.cnpj;
        this.endereco = {
          cep: entity.idendereco?.cep,
          complemento: entity.idendereco?.complemento,
          estado: {
            nome: entity.idendereco?.estado?.nome,
            uf: entity.idendereco?.estado?.uf,
          },
        };
        this.contato = {
          numero: entity.idcontato?.numero
        };
      }
}  