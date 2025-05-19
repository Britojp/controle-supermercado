import { State } from "src/database/entities/state.entity";

export class readStatesDTO {
    id: string;
    name: string;
    uf: string;
    
    constructor(entity: State) {
        this.id = entity.id;
        this.name = entity.name;
        this.uf = entity.uf;
    }  
}