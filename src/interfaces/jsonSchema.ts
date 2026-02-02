import { StellioTemplateProp, StellioTemplateRelationship } from 'src/interfaces';

/**
 * This JsonSchema interface use this gist as a base:
 * https://gist.github.com/michiel/f3883b9d0554779a78b6d1c8d79b4a66
 *
 * It has been modified to match Twin Picks needs
 *
 */
export interface JsonSchema {
    /////////////////////////////////////////////////
    // Schema Metadata
    /////////////////////////////////////////////////
    /**
     * At the entity level: is used to show a friendly title for the entity instead of a NGSI-LD type \
     * At the property level: is used as label for the property input
     */
    title?: string;
    /**
     * At the entity level: is used to show a friendly description of the entity and its purpose \
     * At the property level: has no effects
     */
    description?: string;

    /////////////////////////////////////////////////
    // Number Validation
    /////////////////////////////////////////////////
    /**
     * At the entity level: is used to limit to a specific number of entities before provisioning is allowed \
     * At the property level: is used to limit to a maximum number of relationships before entity can be created
     */
    maximum?: number;
    /**
     * At the entity level: is used to force a minimum number of entities before provisioning is allowed (1 by default if omitted) \
     * At the property level: is used to force a minimum number of relationships before entity can be created
     */
    minimum?: number;

    /////////////////////////////////////////////////
    // String Validation
    /////////////////////////////////////////////////
    /**
     * At the entity level: has no effects \
     * At the property level: limit max number of chars
     */
    maxLength?: number;
    /**
     * At the entity level: has no effects \
     * At the property level: force a minimum number of chars
     */
    minLength?: number;
    /**
     * At the entity level: has no effects \
     * At the property level: in combination with schemaType: 'string', a regex string that the value must conform to
     */
    pattern?: string;

    /////////////////////////////////////////////////
    // Array Validation
    /////////////////////////////////////////////////
    /**
     * At the entity level: has no effects \
     * At the property level: must be used in combination with `schemaType: 'array'`. Allows to define the schema for each item of the array.
     */
    items?: StellioTemplateProp | StellioTemplateRelationship;
    /**
     * At the entity level: has no effects \
     * At the property level: can be used in combination with `schemaType: 'array'`. Allows to limit a specific number of items.
     */
    maxItems?: number;
    /**
     * At the entity level: has no effects \
     * At the property level: can be used in combination with `schemaType: 'array'`. Allows to force a specific number of items.
     */
    minItems?: number;

    /////////////////////////////////////////////////
    // Object Validation
    /////////////////////////////////////////////////
    /**
     * At the entity level: input fields of properties referenced in the array will have to be filled to create the entity \
     * At the property level: has no effects
     */
    required?: string[];
    /**
     * At the entity level: has no effects \
     * At the property level: restrict the property possible string values
     */
    enum?: string[] | number[];

    /////////////////////////////////////////////////
    // Twin Picks Specificities
    /////////////////////////////////////////////////
    /**
     * At the entity level: must be used to set the entity type of the entity defined by the schema \
     * At the property level: mandatory, used to help Twin Picks know what to expect and display a relevant input to the user
     *  Can be: "string", or "integer" for simple property values
     *  Can be: "json", allow to input raw json
     *  Can be: "array" for multiproperty attributes; "object" for Geo properties
     *  Can be: "date" for a date picking input
     */
    schemaType: string;
    /**
     * At the entity level: has no effects \
     * At the property level: show a different attribute name than raw NGSI-LD
     */
    friendlyAttributeName?: string;
    /**
     * At the entity level: has no effects \
     * At the property level: if true, the prop won't appear in the
     *  guided provisioning form, but Twin Picks will still
     *  create the property with init values
     *  If false or undefined, the prop will have
     *  To be set manually on Twin Picks
     */
    canSelfInit?: boolean;
    /**
     * At the entity level: Decides if an entity can be created in Twin Picks
     *  Default "undefined" value type is considered as "true"
     *  If "false", user will be forced to pick an existing entity \
     * At the property level: has no effects
     */
    canEntityBeCreated?: boolean;
    /**
     * At the entity level: has no effects \
     * At the property level:
     *  When a relationship can be towards more than only one type
     *  Use this array of ids to accept more than one
     *  The string id contained in "object" will be ignored
     */
    listOfAllowedRelationships?: string[];
    /**
     * At the entity level: has no effects \
     * At the property level: allows to set a date in the observedAt sub core property
     */
    canSetObservedAt?: boolean;
    /**
     * At the entity level: has no effects \
     * At the property level: allows to set a unitCode
     */
    canSetUnitCode?: boolean;
    /**
     * At the entity level: The value of the designated property will be used to create the entity's unique identifier \
     * At the property level: has no effects
     */
    identifier?: string;
    /**
     * At the entity level: has no effects \
     * At the property level: enforce a property permission to be edited (true by default)
     */
    canBeEdited?: boolean;
    /**
     * At the entity level: has no effects \
     * At the property level: used to order input fields in Twin Picks from top to bottom (1, 2 , 3, ...)
     */
    order?: number;
}
