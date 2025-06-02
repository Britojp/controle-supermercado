import { Controller, Get } from '@nestjs/common';
import { CorridorsService } from './corridors.service';

@Controller('corridors')
export class CorridorsController {
    constructor(private readonly corridorsService: CorridorsService) {}
    @Get()
    findAll() {
        return this.corridorsService.findAll();
    }
}
