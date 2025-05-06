import { createProductDTO } from "src/product/dto/create-product.dto";
import { createSupplierDTO } from "src/supplier/dto/create-supplier.dto";
import { createUserDTO } from "src/usuario/dto/create-user.dto";
import { IsInt, IsNumber, IsDate, IsString, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';


export class createTransactionDTO {
    @IsInt()
    id: number;

    @IsInt()
    quantidade: number;

    @IsDate()
    @Type(() => Date)
    data: Date;

    @IsNumber()
    preco: number;

    @ValidateNested()
    @Type(() => createUserDTO)
    usuario: createUserDTO;

    @ValidateNested()
    @Type(() => createSupplierDTO)
    fornecedor: createSupplierDTO;

    @IsString()
    tipo_transacao: string;

    @ValidateNested()
    @Type(() => createProductDTO)
    produto: createProductDTO;
}
