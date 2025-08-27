import {
  IsInt,
  IsNumber,
  IsDateString,
  IsString,
  IsIn,
  ValidateNested,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { Tipo_Transacao } from 'src/interfaces/interfaces.types';
import { ApiProperty } from '@nestjs/swagger';

export class UserDTO {
  @ApiProperty({
    description: 'ID do usuário',
    example: 'user-123',
    type: String
  })
  @IsString()
  id: string;
}

export class SupplierDTO {
  @ApiProperty({
    description: 'ID do fornecedor',
    example: 'supplier-456',
    type: String
  })
  @IsString()
  id: string;
}

export class MeasurementDTO {
  @ApiProperty({
    description: 'ID da medida',
    example: 'measurement-789',
    type: String
  })
  @IsString()
  id: string;
}

export class NutritionDTO {
  @ApiProperty({
    description: 'Porção em gramas',
    example: 100,
    type: Number
  })
  @IsInt()
  portion: number;

  @ApiProperty({
    description: 'Quantidade de proteína por 100g',
    example: 7.5,
    type: Number
  })
  @IsNumber()
  protein_quantity: number;

  @ApiProperty({
    description: 'Quantidade de gordura por 100g',
    example: 1.2,
    type: Number
  })
  @IsNumber()
  fatness_quantity: number;

  @ApiProperty({
    description: 'Quantidade de carboidrato por 100g',
    example: 77.0,
    type: Number
  })
  @IsNumber()
  carbohydrate_quantity: number;

  @ApiProperty({
    description: 'Medida da porção',
    type: () => MeasurementDTO
  })
  @ValidateNested()
  @Type(() => MeasurementDTO)
  measurement: MeasurementDTO;
}

export class CategoryDTO {
  @ApiProperty({
    description: 'ID da categoria',
    example: 'category-321',
    type: String
  })
  @IsString()
  id: string;
}

export class BrandDTO {
  @ApiProperty({
    description: 'ID da marca',
    example: 'brand-654',
    type: String
  })
  @IsString()
  id: string;
}

export class ProductDTO {
  @ApiProperty({
    description: 'Nome do produto',
    example: 'Arroz Integral',
    type: String
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Informações nutricionais do produto',
    type: () => NutritionDTO
  })
  @ValidateNested()
  @Type(() => NutritionDTO)
  nutrition: NutritionDTO;

  @ApiProperty({
    description: 'Categoria do produto',
    type: () => CategoryDTO
  })
  @ValidateNested()
  @Type(() => CategoryDTO)
  category: CategoryDTO;

  @ApiProperty({
    description: 'Marca do produto',
    type: () => BrandDTO
  })
  @ValidateNested()
  @Type(() => BrandDTO)
  brand: BrandDTO;
}

export class CreateTransactionDTO {
  @ApiProperty({
    description: 'Tipo da transação',
    example: 'ENTRADA',
    enum: ['ENTRADA', 'SAIDA'],
    type: String
  })
  @IsEnum(['ENTRADA', 'SAIDA'])
  transaction_type: Tipo_Transacao;

  @ApiProperty({
    description: 'Quantidade do produto',
    example: 10,
    type: Number
  })
  @IsInt()
  quantity: number;

  @ApiProperty({
    description: 'Preço unitário do produto',
    example: 150.5,
    type: Number
  })
  @IsNumber()
  price: number;

  @ApiProperty({
    description: 'Data da transação (formato ISO)',
    example: '2024-06-01',
    type: String,
    required: false
  })
  @IsOptional()
  @IsDateString()
  transaction_date?: string;

  @ApiProperty({
    description: 'Usuário responsável pela transação',
    type: () => UserDTO
  })
  @ValidateNested()
  @Type(() => UserDTO)
  user: UserDTO;

  @ApiProperty({
    description: 'Fornecedor da transação',
    type: () => SupplierDTO
  })
  @ValidateNested()
  @Type(() => SupplierDTO)
  supplier: SupplierDTO;

  @ApiProperty({
    description: 'Produto da transação',
    type: () => ProductDTO
  })
  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO;
}
