import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { createSupplierDTO } from './dto/create-supplier-dto';

@Controller('supplier')
export class SupplierController {
    constructor(private readonly supplierService: SupplierService){}

    @Get()
    findAll(){
        return this.supplierService.findAll()
    }
    
    @Get(':id')
    findOne(@Param('id') id: number){
        return this.supplierService.findOne(id);
    }

    @Post()
    create(@Body() createSupplierDTO: createSupplierDTO){
        return this.supplierService.create(createSupplierDTO);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() createSupplierDTO: createSupplierDTO){
        return this.supplierService.update(id, createSupplierDTO);
    }

    @HttpCode(204)
    @Delete(':id')
    remove(@Param(':id') id: number){
        return this.supplierService.remove(id);
    }
}
