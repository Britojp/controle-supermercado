import { Product } from "src/database/entities/product.entity";

export class readProductDTO {
    id: string
    name: string
    nutrition: {
            portion: number
            protein_quantity: number
            fatness_quantity : number
            carbohydrate_quantity: number
            measurement: {
                name: string
                sigla: string
                }
            }
            category: {
                name: string
            }
            brand: {
                name: string
            }
    
    constructor(entity:Product) {
        this.id = entity.id
        this.name = entity.name
        this.nutrition = {
            portion: entity.nutrition?.portion,
            protein_quantity: entity.nutrition.protein_quantity,
            fatness_quantity: entity.nutrition.fatness_quantity,
            carbohydrate_quantity: entity.nutrition.carbohydrate_quantity,
            measurement: {
                name: entity.nutrition.measurement.name,
                sigla: entity.nutrition.measurement.initials,
            },
        };
        this.category = {
            name: entity.category.name,
        },
        this.brand = {
            name: entity.brand.name
        }
    }
}