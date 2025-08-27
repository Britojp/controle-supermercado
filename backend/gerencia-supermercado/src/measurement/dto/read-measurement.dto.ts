import { Measurement } from "src/database/entities/measurement.entity";
import { ApiProperty } from "@nestjs/swagger";

export class ReadMeasurementDto {
    @ApiProperty({
        description: 'Nome da medida',
        example: 'Gramas',
        type: String
    })
    name: string;    
    
    @ApiProperty({
        description: 'Iniciais da medida',
        example: 'g',
        type: String
    })
    initials: string;

    constructor(entity: Measurement){
        this.name = entity.name;
        this.initials = entity.initials;
    }
}
