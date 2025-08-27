import { State } from "src/database/entities/state.entity";
import { ApiProperty } from "@nestjs/swagger";

export class readStatesDTO {
    @ApiProperty({
        description: 'ID do estado',
        example: '1',
        type: String
    })
    id: string;
    
    @ApiProperty({
        description: 'Nome do estado',
        example: 'São Paulo',
        type: String
    })
    name: string;
    
    @ApiProperty({
        description: 'Sigla do estado',
        example: 'SP',
        type: String
    })
    uf: string;
    
    constructor(entity: State) {
        this.id = entity.id;
        this.name = entity.name;
        this.uf = entity.uf;
    }  
}