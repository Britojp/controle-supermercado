import { EntityNotFoundError } from "src/common/errors";

export class UserNotFoundError extends EntityNotFoundError {
  constructor(identifier: string | number, context?: string) {
    super('Usuário', identifier, context);
  }
}