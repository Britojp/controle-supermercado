import { Measurement } from "src/database/entities/measurement.entity";

export class ReadMeasurementDto {
    name: string;    
    initials: string;

    constructor(entity: Measurement){
        this.name = entity.name;
        this.initials = entity.initials;
    }
}
