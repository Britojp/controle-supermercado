import { EntityNotFoundError } from "src/common/errors";

export class ShelvesNotFoundError extends EntityNotFoundError {
  constructor(identifier: string | number, context?: string) {
    super('Prateleira', identifier, context);
  }
}