/* tslint:disable */
/* eslint-disable */
/**
 * 
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ShoppingListRecipe
 */
export interface ShoppingListRecipe {
    /**
     * 
     * @type {number}
     * @memberof ShoppingListRecipe
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof ShoppingListRecipe
     */
    readonly recipeName: string;
    /**
     * 
     * @type {string}
     * @memberof ShoppingListRecipe
     */
    readonly name: string;
    /**
     * 
     * @type {number}
     * @memberof ShoppingListRecipe
     */
    recipe?: number | null;
    /**
     * 
     * @type {number}
     * @memberof ShoppingListRecipe
     */
    mealplan?: number | null;
    /**
     * 
     * @type {string}
     * @memberof ShoppingListRecipe
     */
    servings: string;
    /**
     * 
     * @type {string}
     * @memberof ShoppingListRecipe
     */
    readonly mealplanNote: string;
    /**
     * 
     * @type {Date}
     * @memberof ShoppingListRecipe
     */
    readonly mealplanFromDate: Date;
    /**
     * 
     * @type {string}
     * @memberof ShoppingListRecipe
     */
    readonly mealplanType: string;
}

/**
 * Check if a given object implements the ShoppingListRecipe interface.
 */
export function instanceOfShoppingListRecipe(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "recipeName" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "servings" in value;
    isInstance = isInstance && "mealplanNote" in value;
    isInstance = isInstance && "mealplanFromDate" in value;
    isInstance = isInstance && "mealplanType" in value;

    return isInstance;
}

export function ShoppingListRecipeFromJSON(json: any): ShoppingListRecipe {
    return ShoppingListRecipeFromJSONTyped(json, false);
}

export function ShoppingListRecipeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ShoppingListRecipe {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'recipeName': json['recipe_name'],
        'name': json['name'],
        'recipe': !exists(json, 'recipe') ? undefined : json['recipe'],
        'mealplan': !exists(json, 'mealplan') ? undefined : json['mealplan'],
        'servings': json['servings'],
        'mealplanNote': json['mealplan_note'],
        'mealplanFromDate': (new Date(json['mealplan_from_date'])),
        'mealplanType': json['mealplan_type'],
    };
}

export function ShoppingListRecipeToJSON(value?: ShoppingListRecipe | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'recipe': value.recipe,
        'mealplan': value.mealplan,
        'servings': value.servings,
    };
}

