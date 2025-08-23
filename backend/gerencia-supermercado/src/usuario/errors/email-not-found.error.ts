import { EntityNotFoundError } from "src/common/errors";

export class EmailNotFoundError extends EntityNotFoundError {
  constructor(email: string, context?: string) {
    super('Usuário', `email: ${email}`, context);
  }
}