import { Supplier } from 'src/database/entities/supplier.entity';

export class readSupplierDTO {
  id: string;
  name: string;
  cnpj: string;
  address: {
    cep: string;
    complement: string;
    state: {
      name: string;
      uf: string;
    };
  };
  contact: {
    tel_number: string;
  };

  constructor(entity: Supplier) {
    this.id = entity.id;
    this.name = entity.name;
    this.cnpj = entity.cnpj;
    this.address = {
      cep: entity.id_address?.cep,
      complement: entity.id_address?.complement,
      state: {
        name: entity.id_address?.state?.name,
        uf: entity.id_address?.state?.uf,
      },
    };
    this.contact = {
      tel_number: entity.id_contacts?.tel_number,
    };
  }
}
