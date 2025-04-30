import { PartialType } from "@nestjs/mapped-types";
import { createBatchDTO } from "./create-batch.dto";

export class updateBatchDTO extends PartialType(createBatchDTO){}