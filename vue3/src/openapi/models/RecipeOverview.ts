/* tslint:disable */
/* eslint-disable */
/**
 * Tandoor
 * Tandoor API Docs
 *
 * The version of the OpenAPI document: 0.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { KeywordLabel } from './KeywordLabel';
import {
    KeywordLabelFromJSON,
    KeywordLabelFromJSONTyped,
    KeywordLabelToJSON,
} from './KeywordLabel';

/**
 * Adds nested create feature
 * @export
 * @interface RecipeOverview
 */
export interface RecipeOverview {
    /**
     * 
     * @type {number}
     * @memberof RecipeOverview
     */
    readonly id: number;
    /**
     * 
     * @type {string}
     * @memberof RecipeOverview
     */
    readonly name: string;
    /**
     * 
     * @type {string}
     * @memberof RecipeOverview
     */
    readonly description: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecipeOverview
     */
    readonly image: string | null;
    /**
     * 
     * @type {Array<KeywordLabel>}
     * @memberof RecipeOverview
     */
    readonly keywords: Array<KeywordLabel>;
    /**
     * 
     * @type {number}
     * @memberof RecipeOverview
     */
    readonly workingTime: number;
    /**
     * 
     * @type {number}
     * @memberof RecipeOverview
     */
    readonly waitingTime: number;
    /**
     * 
     * @type {number}
     * @memberof RecipeOverview
     */
    readonly createdBy: number;
    /**
     * 
     * @type {Date}
     * @memberof RecipeOverview
     */
    readonly createdAt: Date;
    /**
     * 
     * @type {Date}
     * @memberof RecipeOverview
     */
    readonly updatedAt: Date;
    /**
     * 
     * @type {boolean}
     * @memberof RecipeOverview
     */
    readonly internal: boolean;
    /**
     * 
     * @type {number}
     * @memberof RecipeOverview
     */
    readonly servings: number;
    /**
     * 
     * @type {string}
     * @memberof RecipeOverview
     */
    readonly servingsText: string;
    /**
     * 
     * @type {string}
     * @memberof RecipeOverview
     */
    readonly rating: string | null;
    /**
     * 
     * @type {Date}
     * @memberof RecipeOverview
     */
    readonly lastCooked: Date | null;
    /**
     * 
     * @type {string}
     * @memberof RecipeOverview
     */
    readonly _new: string;
    /**
     * 
     * @type {string}
     * @memberof RecipeOverview
     */
    readonly recent: string;
}

/**
 * Check if a given object implements the RecipeOverview interface.
 */
export function instanceOfRecipeOverview(value: object): boolean {
    if (!('id' in value)) return false;
    if (!('name' in value)) return false;
    if (!('description' in value)) return false;
    if (!('image' in value)) return false;
    if (!('keywords' in value)) return false;
    if (!('workingTime' in value)) return false;
    if (!('waitingTime' in value)) return false;
    if (!('createdBy' in value)) return false;
    if (!('createdAt' in value)) return false;
    if (!('updatedAt' in value)) return false;
    if (!('internal' in value)) return false;
    if (!('servings' in value)) return false;
    if (!('servingsText' in value)) return false;
    if (!('rating' in value)) return false;
    if (!('lastCooked' in value)) return false;
    if (!('_new' in value)) return false;
    if (!('recent' in value)) return false;
    return true;
}

export function RecipeOverviewFromJSON(json: any): RecipeOverview {
    return RecipeOverviewFromJSONTyped(json, false);
}

export function RecipeOverviewFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecipeOverview {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'name': json['name'],
        'description': json['description'],
        'image': json['image'],
        'keywords': ((json['keywords'] as Array<any>).map(KeywordLabelFromJSON)),
        'workingTime': json['working_time'],
        'waitingTime': json['waiting_time'],
        'createdBy': json['created_by'],
        'createdAt': (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
        'internal': json['internal'],
        'servings': json['servings'],
        'servingsText': json['servings_text'],
        'rating': json['rating'],
        'lastCooked': (json['last_cooked'] == null ? null : new Date(json['last_cooked'])),
        '_new': json['new'],
        'recent': json['recent'],
    };
}

export function RecipeOverviewToJSON(value?: RecipeOverview | null): any {
    if (value == null) {
        return value;
    }
    return {
        
    };
}

