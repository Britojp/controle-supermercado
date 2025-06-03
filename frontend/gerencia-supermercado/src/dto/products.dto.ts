export enum TransactionType {
  ENTRADA = 'ENTRADA',
  SAIDA = 'SAIDA',
}

export interface UserDTO {
  id: string;
}

export interface SupplierDTO {
  id: string;
}

export interface MeasurementDTO {
  id: string;
}

export interface NutritionDTO {
  portion: number;
  protein_quantity: number;
  fatness_quantity: number;
  carbohydrate_quantity: number;
  measurement: MeasurementDTO;
}

export interface CategoryDTO {
  id: string;
}

export interface BrandDTO {
  id: string;
}

export interface ProductDTO {
  name: string;
  nutrition: NutritionDTO;
  category: CategoryDTO;
  brand: BrandDTO;
}

