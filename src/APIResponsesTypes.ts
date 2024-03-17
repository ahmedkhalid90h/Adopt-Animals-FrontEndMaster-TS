export type Animal = "dog" | "cat" | "bird" | "reptile" | "rabbit"

export interface Pet {
    images: any;
    id: number;
    name: string;
    animal: Animal;
    description: string;
    breed: string;
    city: string;
    state: string;
}

export interface PetAPIResponse {
    numberOfResults: number;
    startIndex: number;
    endIndex: number;
    hasNext: boolean;
    pets: Pet[];
}
export interface BreedListAPIResponse {
    animal: Animal;
    breeds: string[];
}