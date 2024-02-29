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
import type { OpenDataUnitBaseUnit } from './OpenDataUnitBaseUnit';
import {
    OpenDataUnitBaseUnitFromJSON,
    OpenDataUnitBaseUnitFromJSONTyped,
    OpenDataUnitBaseUnitToJSON,
} from './OpenDataUnitBaseUnit';
import type { OpenDataUnitTypeEnum } from './OpenDataUnitTypeEnum';
import {
    OpenDataUnitTypeEnumFromJSON,
    OpenDataUnitTypeEnumFromJSONTyped,
    OpenDataUnitTypeEnumToJSON,
} from './OpenDataUnitTypeEnum';
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
 * @interface OpenDataUnit
 */
export interface OpenDataUnit {
    /**
     * 
     * @type {number}
     * @memberof OpenDataUnit
     */
    readonly id: number;
    /**
     * 
     * @type {OpenDataVersion}
     * @memberof OpenDataUnit
     */
    version: OpenDataVersion;
    /**
     * 
     * @type {string}
     * @memberof OpenDataUnit
     */
    slug: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataUnit
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataUnit
     */
    pluralName?: string;
    /**
     * 
     * @type {OpenDataUnitBaseUnit}
     * @memberof OpenDataUnit
     */
    baseUnit?: OpenDataUnitBaseUnit;
    /**
     * 
     * @type {OpenDataUnitTypeEnum}
     * @memberof OpenDataUnit
     */
    type: OpenDataUnitTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof OpenDataUnit
     */
    comment?: string;
    /**
     * 
     * @type {string}
     * @memberof OpenDataUnit
     */
    readonly createdBy: string;
}

/**
 * Check if a given object implements the OpenDataUnit interface.
 */
export function instanceOfOpenDataUnit(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "slug" in value;
    isInstance = isInstance && "name" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "createdBy" in value;

    return isInstance;
}

export function OpenDataUnitFromJSON(json: any): OpenDataUnit {
    return OpenDataUnitFromJSONTyped(json, false);
}

export function OpenDataUnitFromJSONTyped(json: any, ignoreDiscriminator: boolean): OpenDataUnit {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'version': OpenDataVersionFromJSON(json['version']),
        'slug': json['slug'],
        'name': json['name'],
        'pluralName': !exists(json, 'plural_name') ? undefined : json['plural_name'],
        'baseUnit': !exists(json, 'base_unit') ? undefined : OpenDataUnitBaseUnitFromJSON(json['base_unit']),
        'type': OpenDataUnitTypeEnumFromJSON(json['type']),
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'createdBy': json['created_by'],
    };
}

export function OpenDataUnitToJSON(value?: OpenDataUnit | null): any {
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
        'base_unit': OpenDataUnitBaseUnitToJSON(value.baseUnit),
        'type': OpenDataUnitTypeEnumToJSON(value.type),
        'comment': value.comment,
    };
}

