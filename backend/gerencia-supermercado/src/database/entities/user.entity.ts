import { Transaction } from "src/database/entities/transaction.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string
    
    @Column()
    email: string
    
    @Column()
    password: string

    @OneToMany(() => Transaction, transaction => transaction.usuario)
    transactions: Transaction[];
    }