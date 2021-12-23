/**
 * Can be made globally available by placing this
 * inside `global.d.ts` and removing `export` keyword
 */
export interface Locals {
	userid: string;
}

export interface Ingredient {
    text: string;
    image: string;
}

export interface Recipe {
    uri: string;
    label: string;
    image: string;
    cautions: string[];
    ingredients: Ingredient[];
    calories: number;
    cuisineType: string[];
    mealType: string[];
    dishType: string[];
    url: string;
}

export interface Diet {
	name: string;
	description: string;
	url: string;
	image: string;
	diet: string;
}