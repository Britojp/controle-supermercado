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

export class UserDTO {
  @IsString()
  id: string;
}

export class SupplierDTO {
  @IsString()
  id: string;
}

export class MeasurementDTO {
  @IsString()
  id: string;
}

export class NutritionDTO {
  @IsInt()
  portion: number;

  @IsNumber()
  protein_quantity: number;

  @IsNumber()
  fatness_quantity: number;

  @IsNumber()
  carbohydrate_quantity: number;

  @ValidateNested()
  @Type(() => MeasurementDTO)
  measurement: MeasurementDTO;
}

export class CategoryDTO {
  @IsString()
  id: string;
}

export class BrandDTO {
  @IsString()
  id: string;
}

export class ProductDTO {
  @IsString()
  name: string;

  @ValidateNested()
  @Type(() => NutritionDTO)
  nutrition: NutritionDTO;

  @ValidateNested()
  @Type(() => CategoryDTO)
  category: CategoryDTO;

  @ValidateNested()
  @Type(() => BrandDTO)
  brand: BrandDTO;
}

export class CreateTransactionDTO {
  @IsEnum(['ENTRADA', 'SAIDA'])
  transaction_type: Tipo_Transacao;

  @IsInt()
  quantity: number;

  @IsNumber()
  price: number;

  @IsOptional()
  @IsDateString()
  transaction_date?: string;

  @ValidateNested()
  @Type(() => UserDTO)
  user: UserDTO;

  @ValidateNested()
  @Type(() => SupplierDTO)
  supplier: SupplierDTO;

  @ValidateNested()
  @Type(() => ProductDTO)
  product: ProductDTO;
}
