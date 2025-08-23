import { UserToken } from './models/UserToken';
import { Injectable } from '@nestjs/common';
import { UsuarioService } from 'src/usuario/user.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/database/entities/user.entity';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt'
import { UnauthorizedError } from 'src/common/errors';

@Injectable()
export class AuthService {
    constructor(private readonly usuarioService: UsuarioService, private readonly jwtService: JwtService ){}

    async login(user: User) : Promise<UserToken> {
        const payload : UserPayload = {
            sub: user.id,
            email: user.email,
            name: user.name,
        }

        const jwtToken = this.jwtService.sign(payload);

        return {
            access_token: jwtToken,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
            }
        };
    }

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

            throw new UnauthorizedError('Usuário não autorizado', 'AuthService');
        }
    }
}
