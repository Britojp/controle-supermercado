import type {  ProductDTO } from "./products.dto";

export enum TransactionType {
    Entrada = 'entrada',
    Saida = 'saida',
}

export interface CreateTransactionDTO {
  transaction_type: TransactionType;
  quantity: number;
  price: number;
  user: {id: string};
  supplier: {id: string};
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
