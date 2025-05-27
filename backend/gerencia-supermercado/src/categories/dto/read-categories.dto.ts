import { Category } from "src/database/entities/category.entity";

export class ReadCategoriesDTO {
    id: string;
    name: string;

    constructor(entity: Category) {
        this.id = entity.id;
        this.name = entity.name;
    }

}