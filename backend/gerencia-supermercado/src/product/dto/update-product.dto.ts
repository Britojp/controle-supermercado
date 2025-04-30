import { PartialType } from "@nestjs/mapped-types";
import { createProductDTO } from "./create-product.dto";

export class updateProductDTO extends PartialType(createProductDTO){}