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
import type { User } from './User';
import {
    UserFromJSON,
    UserFromJSONTyped,
    UserToJSON,
} from './User';

/**
 * 
 * @export
 * @interface CookLog
 */
export interface CookLog {
    /**
     * 
     * @type {number}
     * @memberof CookLog
     */
    readonly id: number;
    /**
     * 
     * @type {number}
     * @memberof CookLog
     */
    recipe: number;
    /**
     * 
     * @type {number}
     * @memberof CookLog
     */
    servings?: number | null;
    /**
     * 
     * @type {number}
     * @memberof CookLog
     */
    rating?: number | null;
    /**
     * 
     * @type {string}
     * @memberof CookLog
     */
    comment?: string | null;
    /**
     * 
     * @type {User}
     * @memberof CookLog
     */
    readonly createdBy: User;
    /**
     * 
     * @type {Date}
     * @memberof CookLog
     */
    createdAt?: Date;
    /**
     * 
     * @type {Date}
     * @memberof CookLog
     */
    readonly updatedAt: Date;
}

/**
 * Check if a given object implements the CookLog interface.
 */
export function instanceOfCookLog(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "recipe" in value;
    isInstance = isInstance && "createdBy" in value;
    isInstance = isInstance && "updatedAt" in value;

    return isInstance;
}

export function CookLogFromJSON(json: any): CookLog {
    return CookLogFromJSONTyped(json, false);
}

export function CookLogFromJSONTyped(json: any, ignoreDiscriminator: boolean): CookLog {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'recipe': json['recipe'],
        'servings': !exists(json, 'servings') ? undefined : json['servings'],
        'rating': !exists(json, 'rating') ? undefined : json['rating'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'createdBy': UserFromJSON(json['created_by']),
        'createdAt': !exists(json, 'created_at') ? undefined : (new Date(json['created_at'])),
        'updatedAt': (new Date(json['updated_at'])),
    };
}

export function CookLogToJSON(value?: CookLog | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'recipe': value.recipe,
        'servings': value.servings,
        'rating': value.rating,
        'comment': value.comment,
        'created_at': value.createdAt === undefined ? undefined : (value.createdAt.toISOString()),
    };
}

