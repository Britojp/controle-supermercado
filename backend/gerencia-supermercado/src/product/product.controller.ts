import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProductService } from './product.service';
import { createProductDTO } from './dto/create-product.dto';

@Controller('product')
export class ProductController {
    constructor (private readonly productService: ProductService){}

    @Get()
    findAll(){
        return this.productService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.productService.findOne(id);
    }

    @Post() 
    create(@Body() createProductDTO : createProductDTO){
        return this.productService.create(createProductDTO);
    }

    @Delete(':id')
    remove(@Param('id') id: number){
        return this.productService.remove(id);
    }

}
