import { PartialType } from "@nestjs/mapped-types";
import { createSupplierDTO } from "./create-supplier-dto";

export class updateSupplierDTO extends PartialType(createSupplierDTO){}