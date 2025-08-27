import { Supplier } from 'src/database/entities/supplier.entity';
import { ApiProperty } from '@nestjs/swagger';

export class readSupplierDTO {
  @ApiProperty({
    description: 'ID do fornecedor',
    example: 'supplier-123',
    type: String
  })
  id: string;
  
  @ApiProperty({
    description: 'Nome do fornecedor',
    example: 'Fornecedor Exemplo Ltda',
    type: String
  })
  name: string;
  
  @ApiProperty({
    description: 'CNPJ do fornecedor',
    example: '12.345.678/0001-90',
    type: String
  })
  cnpj: string;
  
  @ApiProperty({
    description: 'Endereço do fornecedor',
    type: 'object',
    properties: {
      cep: { type: 'string', example: '01234-567' },
      complement: { type: 'string', example: 'Sala 101' },
      state: { 
        type: 'object',
        properties: {
          name: { type: 'string', example: 'São Paulo' },
          uf: { type: 'string', example: 'SP' }
        }
      }
    }
  })
  address: {
    cep: string;
    complement: string;
    state: {
      name: string;
      uf: string;
    };
  };
  
  @ApiProperty({
    description: 'Informações de contato',
    type: 'object',
    properties: {
      tel_number: { type: 'string', example: '(11) 1234-5678' }
    }
  })
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
