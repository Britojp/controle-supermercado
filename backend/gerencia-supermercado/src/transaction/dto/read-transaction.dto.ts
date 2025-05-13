import { Transaction } from "src/database/entities/transaction.entity"

export class readTransactionDTO{
    id: string
    quantity: number
    date: Date
    price: number
    user:{
        name: string
        email: string
    }
    supplier: {
        name: string
    }
    transaction_type: string
    product: {
        name: string
    }

    constructor( entity: Transaction){
        this.id = entity.id;
        this.transaction_type = entity.transaction_type;
        this.quantity = entity.quantity;
        this.price = entity.price;
        this.product = {
            name: entity.product.name
        };
        this.supplier = {
            name: entity.supplier.name
        };
        this.user = {
            name: entity.user.name,
            email: entity.user.email
        };
    }

}