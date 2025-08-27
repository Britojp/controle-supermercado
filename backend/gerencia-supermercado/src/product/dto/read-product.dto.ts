import { Product } from "src/database/entities/product.entity";
import { ApiProperty } from "@nestjs/swagger";

export class readProductDTO {
    @ApiProperty({
        description: 'ID do produto',
        example: 'product-123',
        type: String
    })
    id: string
    
    @ApiProperty({
        description: 'Nome do produto',
        example: 'Arroz Integral',
        type: String
    })
    name: string
    
    @ApiProperty({
        description: 'Informações nutricionais do produto',
        type: 'object',
        properties: {
            portion: { type: 'number', example: 100, description: 'Porção em gramas' },
            protein_quantity: { type: 'number', example: 7.5, description: 'Quantidade de proteína por 100g' },
            fatness_quantity: { type: 'number', example: 1.2, description: 'Quantidade de gordura por 100g' },
            carbohydrate_quantity: { type: 'number', example: 77.0, description: 'Quantidade de carboidrato por 100g' },
            measurement: { 
                type: 'object',
                properties: {
                    name: { type: 'string', example: 'Gramas', description: 'Nome da medida' },
                    sigla: { type: 'string', example: 'g', description: 'Sigla da medida' }
                }
            }
        }
    })
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
            
    @ApiProperty({
        description: 'Categoria do produto',
        type: 'object',
        properties: {
            name: { type: 'string', example: 'Grãos', description: 'Nome da categoria' }
        }
    })
    category: {
                name: string
            }
            
    @ApiProperty({
        description: 'Marca do produto',
        type: 'object',
        properties: {
            name: { type: 'string', example: 'Marca Exemplo', description: 'Nome da marca' }
        }
    })
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