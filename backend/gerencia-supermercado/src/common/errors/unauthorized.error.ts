import { AppError } from './base.error';

export class UnauthorizedError extends AppError {
  constructor(message = 'Não autorizado', context?: string) {
    super(message, 401, context);
  }
}
