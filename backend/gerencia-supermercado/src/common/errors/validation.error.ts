import { AppError } from "./base.error";

export class ValidationError extends AppError {
  constructor(message: string, context?: string) {
    super(message, 400, context);
  }
}
