export interface SupplierDTO {
  id: string;
  name: string;
  cnpj: string;
  address: {
    id: string;
    cep: string;
    complement?: string;
    state: {
      id: string;
      name: string;
      uf: string;
    };
  };
  contact: {
    id: string;
    tel_number: string;
  };
}

export interface CreateSupplierDTO {
  name: string;
  cnpj: string;
  address: {
    cep: string;
    complement?: string;
    id_state: string;
  };
  contact: {
    tel_number: string;
  };
}

export interface UpdateSupplierDTO {
  name?: string;
  cnpj?: string;
  address?: {
    cep?: string;
    complement?: string;
    id_state?: string;
  };
  contact?: {
    tel_number?: string;
  };
}
