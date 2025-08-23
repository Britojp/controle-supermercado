import { EntityCreationError } from "src/common/errors";

export class BrandNotCreatedError extends EntityCreationError {
  constructor(reason?: string, context?: string) {
    super('Marca', reason, context);
  }
}
