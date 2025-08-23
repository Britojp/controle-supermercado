import { EntityNotFoundError } from "src/common/errors";

export class BrandNotFoundError extends EntityNotFoundError {
  constructor(identifier: string | number, context?: string) {
    super('Marca', identifier, context);
  }
}