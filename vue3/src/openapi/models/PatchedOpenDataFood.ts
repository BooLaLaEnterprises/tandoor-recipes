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
import type { OpenDataCategory } from './OpenDataCategory';
import {
    OpenDataCategoryFromJSON,
    OpenDataCategoryFromJSONTyped,
    OpenDataCategoryToJSON,
} from './OpenDataCategory';
import type { OpenDataFoodProperty } from './OpenDataFoodProperty';
import {
    OpenDataFoodPropertyFromJSON,
    OpenDataFoodPropertyFromJSONTyped,
    OpenDataFoodPropertyToJSON,
} from './OpenDataFoodProperty';
import type { OpenDataUnit } from './OpenDataUnit';
import {
    OpenDataUnitFromJSON,
    OpenDataUnitFromJSONTyped,
    OpenDataUnitToJSON,
} from './OpenDataUnit';
import type { OpenDataVersion } from './OpenDataVersion';
import {
    OpenDataVersionFromJSON,
    OpenDataVersionFromJSONTyped,
    OpenDataVersionToJSON,
} from './OpenDataVersion';

/**
 * Moves `UniqueValidator`'s from the validation stage to the save stage.
 * It solves the problem with nested validation for unique fields on update.
 * 
 * If you want more details, you can read related issues and articles:
 * https://github.com/beda-software/drf-writable-nested/issues/1
 * http://www.django-rest-framework.org/api-guide/validators/#updating-nested-serializers
 * 
 * Example of usage:
 * ```
 *     class Child(models.Model):
 *     field = models.CharField(unique=True)
 * 
 * 
 * class Parent(models.Model):
 *     child = models.ForeignKey('Child')
 * 
 * 
 * class ChildSerializer(UniqueFieldsMixin, serializers.ModelSerializer):
 *     class Meta:
 *         model = Child
 * 
 * 
 * class ParentSerializer(NestedUpdateMixin, serializers.ModelSerializer):
 *     child = ChildSerializer()
 * 
 *     class Meta:
 *         model = Parent
 * ```
 * 
 * Note: `UniqueFieldsMixin` must be applied only on the serializer
 * which has unique fields.
 * 
 * Note: When you are using both mixins
 * (`UniqueFieldsMixin` and `NestedCreateMixin` or `NestedUpdateMixin`)
 * you should put `UniqueFieldsMixin` ahead.
 * @export
 * @interface PatchedOpenDataFood
 */
export interface PatchedOpenDataFood {
    /**
     * 
     * @type {number}
     * @memberof PatchedOpenDataFood
     */
    readonly id?: number;
    /**
     * 
     * @type {OpenDataVersion}
     * @memberof PatchedOpenDataFood
     */
    version?: OpenDataVersion;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    slug?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    pluralName?: string;
    /**
     * 
     * @type {OpenDataCategory}
     * @memberof PatchedOpenDataFood
     */
    storeCategory?: OpenDataCategory;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof PatchedOpenDataFood
     */
    preferredUnitMetric?: OpenDataUnit | null;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof PatchedOpenDataFood
     */
    preferredShoppingUnitMetric?: OpenDataUnit | null;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof PatchedOpenDataFood
     */
    preferredUnitImperial?: OpenDataUnit | null;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof PatchedOpenDataFood
     */
    preferredShoppingUnitImperial?: OpenDataUnit | null;
    /**
     * 
     * @type {Array<OpenDataFoodProperty>}
     * @memberof PatchedOpenDataFood
     */
    properties?: Array<OpenDataFoodProperty> | null;
    /**
     * 
     * @type {number}
     * @memberof PatchedOpenDataFood
     */
    propertiesFoodAmount?: number;
    /**
     * 
     * @type {OpenDataUnit}
     * @memberof PatchedOpenDataFood
     */
    propertiesFoodUnit?: OpenDataUnit;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    propertiesSource?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    fdcId?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof PatchedOpenDataFood
     */
    readonly createdBy?: string;
}

/**
 * Check if a given object implements the PatchedOpenDataFood interface.
 */
export function instanceOfPatchedOpenDataFood(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PatchedOpenDataFoodFromJSON(json: any): PatchedOpenDataFood {
    return PatchedOpenDataFoodFromJSONTyped(json, false);
}

export function PatchedOpenDataFoodFromJSONTyped(json: any, ignoreDiscriminator: boolean): PatchedOpenDataFood {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'version': !exists(json, 'version') ? undefined : OpenDataVersionFromJSON(json['version']),
        'slug': !exists(json, 'slug') ? undefined : json['slug'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pluralName': !exists(json, 'plural_name') ? undefined : json['plural_name'],
        'storeCategory': !exists(json, 'store_category') ? undefined : OpenDataCategoryFromJSON(json['store_category']),
        'preferredUnitMetric': !exists(json, 'preferred_unit_metric') ? undefined : OpenDataUnitFromJSON(json['preferred_unit_metric']),
        'preferredShoppingUnitMetric': !exists(json, 'preferred_shopping_unit_metric') ? undefined : OpenDataUnitFromJSON(json['preferred_shopping_unit_metric']),
        'preferredUnitImperial': !exists(json, 'preferred_unit_imperial') ? undefined : OpenDataUnitFromJSON(json['preferred_unit_imperial']),
        'preferredShoppingUnitImperial': !exists(json, 'preferred_shopping_unit_imperial') ? undefined : OpenDataUnitFromJSON(json['preferred_shopping_unit_imperial']),
        'properties': !exists(json, 'properties') ? undefined : (json['properties'] === null ? null : (json['properties'] as Array<any>).map(OpenDataFoodPropertyFromJSON)),
        'propertiesFoodAmount': !exists(json, 'properties_food_amount') ? undefined : json['properties_food_amount'],
        'propertiesFoodUnit': !exists(json, 'properties_food_unit') ? undefined : OpenDataUnitFromJSON(json['properties_food_unit']),
        'propertiesSource': !exists(json, 'properties_source') ? undefined : json['properties_source'],
        'fdcId': !exists(json, 'fdc_id') ? undefined : json['fdc_id'],
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'createdBy': !exists(json, 'created_by') ? undefined : json['created_by'],
    };
}

export function PatchedOpenDataFoodToJSON(value?: PatchedOpenDataFood | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'version': OpenDataVersionToJSON(value.version),
        'slug': value.slug,
        'name': value.name,
        'plural_name': value.pluralName,
        'store_category': OpenDataCategoryToJSON(value.storeCategory),
        'preferred_unit_metric': OpenDataUnitToJSON(value.preferredUnitMetric),
        'preferred_shopping_unit_metric': OpenDataUnitToJSON(value.preferredShoppingUnitMetric),
        'preferred_unit_imperial': OpenDataUnitToJSON(value.preferredUnitImperial),
        'preferred_shopping_unit_imperial': OpenDataUnitToJSON(value.preferredShoppingUnitImperial),
        'properties': value.properties === undefined ? undefined : (value.properties === null ? null : (value.properties as Array<any>).map(OpenDataFoodPropertyToJSON)),
        'properties_food_amount': value.propertiesFoodAmount,
        'properties_food_unit': OpenDataUnitToJSON(value.propertiesFoodUnit),
        'properties_source': value.propertiesSource,
        'fdc_id': value.fdcId,
        'comment': value.comment,
    };
}

