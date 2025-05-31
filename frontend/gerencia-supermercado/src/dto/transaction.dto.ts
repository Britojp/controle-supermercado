import type { CreateProductDTO } from "./products.dto";

export enum TransactionType {
    Entrada = 'entrada',
    Saida = 'saida',
}

export interface TransactionDTO {
    id: string;
    type: TransactionType;
    quantity: number;
    price: number;
    id_users: string;
    id_suppliers: string;
    id_products: string;
}

export interface CreateTransactionDTO {
    type: TransactionType;
    quantity: number;
    price: number;
    products: CreateProductDTO;
    id_users: string;
    id_suppliers: string;
}

