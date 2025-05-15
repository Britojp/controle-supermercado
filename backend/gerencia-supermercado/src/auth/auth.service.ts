import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/user.service';
import * as bcrypt from 'bcrypt';


@Injectable()
export class AuthService {
    constructor(private readonly usuarioService: UsuarioService ){}

    async validateUser(email: string, password: string) {
        const user = await this.usuarioService.findByEmail(email);


        if(user){
            const isPasswordValid = await bcrypt.compare(password, user.password);

            if(isPasswordValid){
                return {
                    ...user,
                    password: undefined,
                }
            }

            throw new Error('Erro na autenticação');
        }
    }
}
