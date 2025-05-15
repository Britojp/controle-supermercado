import { Transaction } from "src/database/entities/transaction.entity"
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import * as bcrypt from 'bcrypt';
import { Exclude } from "class-transformer";

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
    
    @BeforeInsert()
    async hashPassword() {
        this.password = await bcrypt.hash(this.password, 10);
    }
}