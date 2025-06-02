import { Controller, Get } from '@nestjs/common';
import { ShelvesService } from './shelves.service';

@Controller('shelves')
export class ShelvesController {
    constructor(private readonly shelvesService: ShelvesService) {}

    @Get()
    findAll() {
        return this.shelvesService.findAll();
    }
}
