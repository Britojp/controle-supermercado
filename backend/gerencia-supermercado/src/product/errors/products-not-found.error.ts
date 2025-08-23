import { EntityNotFoundError } from "src/common/errors";

export class ProductNotFoundError extends EntityNotFoundError {
  constructor(identifier: string | number, context?: string) {
    super('Produto', identifier, context);
  }
}