import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from '@nestjs/common';
import { UsuarioService } from './user.service';
import { createUserDTO } from './dto/create-user.dto';
import { updateUserDTO } from './dto/update-user.dto';

@Controller('user')
export class UsuarioController {

    constructor(private readonly usuarioService: UsuarioService){

    }

    @Get()
    findAll(){
        return this.usuarioService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number){
        return this.usuarioService.findOne(id);
    }

    @Post()
    create(@Body() createUserDTO : createUserDTO){
        return this.usuarioService.create(createUserDTO);
    }

    @Patch(':id')
    update(@Param('id') id : number, @Body() updateUserDTO: updateUserDTO){
        return this.usuarioService.update(id, updateUserDTO);
    }

    @HttpCode(204)
    @Delete(':id')
    remove(@Param(':id') id: number){
        return this.usuarioService.remove(id);
    }

}
