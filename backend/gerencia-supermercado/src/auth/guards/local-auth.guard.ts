import {
ExecutionContext,
Injectable,
UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {
    
canActivate(context: ExecutionContext) { // Permitir a rota para guards específicos
    return super.canActivate(context);
}

handleRequest(err, user) { // Tratamento de erro 
    if (err || !user) {
    throw new UnauthorizedException(err?.message);
    }

    return user;
}
}