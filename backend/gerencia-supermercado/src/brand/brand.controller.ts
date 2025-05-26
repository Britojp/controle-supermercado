import { Body, Controller, Get, Post } from '@nestjs/common';
import { BrandService } from './brand.service';
import { createBrandDTO } from './dto/create-brands.dto';

@Controller('brand')
export class BrandController {
    constructor (private readonly brandService: BrandService){}

    @Get()
    findAll(){
        return this.brandService.findAll();
    }

    @Post()
    create(@Body() createBrandDTO: createBrandDTO){
        return this.brandService.create(createBrandDTO)
    }

}
