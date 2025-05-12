import { Transaction } from "src/database/entities/transaction.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('usuario')
export class User {
    @PrimaryGeneratedColumn()
    id: string
    
    @Column()
    nome: string
    
    @Column()
    email: string
    
    @Column()
    password: string

    @OneToMany(() => Transaction, transaction => transaction.usuario)
    transactions: Transaction[];
    }