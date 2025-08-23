import {
ExecutionContext,
Injectable,
UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UnauthorizedError } from 'src/common/errors';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    
canActivate(context: ExecutionContext) { // Permitir a rota para guards específicos
    return super.canActivate(context);
}

handleRequest(err, user) { // Tratamento de erro 
    if (err || !user) {
        throw new UnauthorizedError(err?.message, 'LocalAuthGuard');
    }

    return user;
}
}