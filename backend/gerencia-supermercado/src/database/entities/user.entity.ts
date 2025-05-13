import { Transaction } from "src/database/entities/transaction.entity"
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('users')
export class User {
    @PrimaryGeneratedColumn()
    id: string
    
    @Column()
    name: string
    
    @Column()
    email: string
    
    @Column()
    password: string

    @OneToMany(() => Transaction, transaction => transaction.user)
    transactions: Transaction[];
    }