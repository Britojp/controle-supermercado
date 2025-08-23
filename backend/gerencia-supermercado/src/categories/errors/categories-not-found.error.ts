import { EntityNotFoundError } from "src/common/errors";

export class CategoriesNotFoundError extends EntityNotFoundError {
  constructor(identifier: string | number, context?: string) {
    super('Categoria', identifier, context);
  }
}