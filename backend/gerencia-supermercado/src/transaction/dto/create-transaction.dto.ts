import { createProductDTO } from "src/product/dto/create-product.dto";
import { createSupplierDTO } from "src/supplier/dto/create-supplier.dto";
import { createUserDTO } from "src/usuario/dto/create-user.dto";
import { IsInt, IsNumber, IsDate, IsString, ValidateNested, IsIn } from 'class-validator';
import { Type } from 'class-transformer';
import { PrimaryGeneratedColumn } from "typeorm";
import { Tipo_Transacao } from "src/interfaces/interfaces.types";


export class createTransactionDTO {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @IsInt()
    quantity: number;

    @IsDate()
    @Type(() => Date)
    date: Date;

    @IsNumber()
    price: number;

    @ValidateNested()
    @Type(() => createUserDTO)
    user: createUserDTO;

    @ValidateNested()
    @Type(() => createSupplierDTO)
    supplier: createSupplierDTO;

    @IsString()
    @IsIn(['ENTRADA', 'SAÍDA']) 
    transaction_type: Tipo_Transacao;

    @ValidateNested()
    @Type(() => createProductDTO)
    product: createProductDTO;
}
