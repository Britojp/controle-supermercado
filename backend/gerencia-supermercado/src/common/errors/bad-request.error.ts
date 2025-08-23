import { AppError } from './base.error';

export class BadRequestError extends AppError {
  constructor(message = 'Requisição inválida', context?: string) {
    super(message, 400, context);
  }
}
