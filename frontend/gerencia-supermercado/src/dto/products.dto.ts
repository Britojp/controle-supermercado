export interface ProductDTO{
    name: string;
    id_nutritions: string;
    id_categories: string;
    id_brands: string;
}

export interface CreateProductDTO {
    name: string;
    nutritions: {
        portion: number;
        protein_quantity: number;
        fatness_quantity: number;
        carbohydrate_quantity: number;
        id_meansurements: string;
    }
    id_categories: string;
    id_brands: string;
}

