import { PartialType } from "@nestjs/mapped-types";
import { createBatchDTO } from "src/batch/dto/create-batch.dto";

export class updateProductDTO extends PartialType(createBatchDTO){}