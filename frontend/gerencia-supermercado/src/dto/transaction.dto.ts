import type {  ProductDTO } from "./products.dto";
import type { supplierDTO } from "./supplier.dto";
import type { userDTO } from "./users.dto";

export enum TransactionType {
    Entrada = 'entrada',
    Saida = 'saida',
}

export interface CreateTransactionDTO {
  transaction_type: TransactionType;
  quantity: number;
  price: number;
  user: userDTO;
  supplier: string | supplierDTO;
  product: ProductDTO;
  transaction_date?: string;
}

export interface TransactionDTO {
    id: string;
    transaction_type: TransactionType;
    quantity: number;
    price: number;
    transaction_date: string;
    user: { id: string;};
    supplier: { id: string; };
    product: ProductDTO;
}
