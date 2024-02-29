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
import type { Step } from './Step';
import {
    StepFromJSON,
    StepFromJSONTyped,
    StepToJSON,
} from './Step';

/**
 * 
 * @export
 * @interface PaginatedStepList
 */
export interface PaginatedStepList {
    /**
     * 
     * @type {number}
     * @memberof PaginatedStepList
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof PaginatedStepList
     */
    next?: string | null;
    /**
     * 
     * @type {string}
     * @memberof PaginatedStepList
     */
    previous?: string | null;
    /**
     * 
     * @type {Array<Step>}
     * @memberof PaginatedStepList
     */
    results?: Array<Step>;
}

/**
 * Check if a given object implements the PaginatedStepList interface.
 */
export function instanceOfPaginatedStepList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaginatedStepListFromJSON(json: any): PaginatedStepList {
    return PaginatedStepListFromJSONTyped(json, false);
}

export function PaginatedStepListFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaginatedStepList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'next': !exists(json, 'next') ? undefined : json['next'],
        'previous': !exists(json, 'previous') ? undefined : json['previous'],
        'results': !exists(json, 'results') ? undefined : ((json['results'] as Array<any>).map(StepFromJSON)),
    };
}

export function PaginatedStepListToJSON(value?: PaginatedStepList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'next': value.next,
        'previous': value.previous,
        'results': value.results === undefined ? undefined : ((value.results as Array<any>).map(StepToJSON)),
    };
}

