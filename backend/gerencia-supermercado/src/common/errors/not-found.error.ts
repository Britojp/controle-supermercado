import { AppError } from "./base.error";

export class NotFoundError extends AppError{
  constructor(resource: string, context?: string) {
    super(`${resource} não encontrado`, 404, context);
  }
}