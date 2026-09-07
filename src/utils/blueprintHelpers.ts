import {
    PropertyBooleanJsonSchema,
    PropertyDateJsonSchema,
    PropertyEnumJsonSchema,
    PropertyIntegerJsonSchema,
    PropertyLevelJsonSchema,
    PropertyStringJsonSchema,
    PropertyArrayJsonSchema,
} from 'src/interfaces/jsonSchema';
import { StellioTemplateGeoProp, StellioTemplateProp, StellioTemplateRelationship } from 'src/interfaces';

let order = 0;

type StringWithoutSchemaType = Omit<PropertyStringJsonSchema, 'schemaType'>;
type EnumWithoutSchemaType = Omit<PropertyEnumJsonSchema, 'schemaType'>;
type IntegerWithoutSchemaType = Omit<PropertyIntegerJsonSchema, 'schemaType'>;
type BooleanWithoutSchemaType = Omit<PropertyBooleanJsonSchema, 'schemaType'>;
type DateWithoutSchemaType = Omit<PropertyDateJsonSchema, 'schemaType'>;
type ArrayWithoutSchemaType = Omit<PropertyArrayJsonSchema, 'schemaType'>;

export const getSimpleTextProp = ({ title, ...rest }: StringWithoutSchemaType): StellioTemplateProp => {
    order++;
    return {
        type: 'Property',
        value: title,
        jsonSchema: {
            type: 'Property',
            value: {
                ...rest,
                schemaType: 'string',
                title,
                order,
            },
        },
    };
};

export const getEnumProp = ({
    title,
    enum: enumValues,
    allowMultiple,
    ...rest
}: EnumWithoutSchemaType): StellioTemplateProp => {
    order++;
    return {
        type: 'Property',
        value: enumValues?.[0],
        jsonSchema: {
            type: 'Property',
            value: {
                ...rest,
                schemaType: 'enum',
                enum: enumValues,
                title: title,
                order: order,
                allowMultiple,
            },
        },
    };
};

export const getIntegerProp = ({ title, minimum, maximum, ...rest }: IntegerWithoutSchemaType): StellioTemplateProp => {
    order++;
    return {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: {
                ...rest,
                schemaType: 'integer',
                minimum: minimum,
                maximum: maximum,
                title: title,
                order: order,
            },
        },
    };
};

export const getBooleanProp = ({ title, ...rest }: BooleanWithoutSchemaType): StellioTemplateProp => {
    order++;
    return {
        type: 'Property',
        value: false,
        jsonSchema: {
            type: 'Property',
            value: {
                ...rest,
                schemaType: 'boolean',
                title: title,
                order: order,
            },
        },
    };
};

export const getDateProp = ({ title, dateMode = 'date', ...rest }: DateWithoutSchemaType): StellioTemplateProp => {
    order++;
    return {
        type: 'Property',
        value: new Date(),
        jsonSchema: {
            type: 'Property',
            value: {
                ...rest,
                schemaType: 'date',
                title: title,
                order: order,
                dateMode,
            },
        },
    };
};

type GetMultiAttributePropParams = {
    formLabel: string;
    formLabelPerItem: string;
    propertySchemaDefinition: PropertyLevelJsonSchema;
    subProps?: [string, StellioTemplateProp][];
};
export const getMultiAttributeProp = ({
    formLabel,
    formLabelPerItem,
    subProps,
    propertySchemaDefinition,
}: GetMultiAttributePropParams): StellioTemplateProp => {
    order++;
    return {
        ...(subProps ? Object.fromEntries(subProps) : {}),
        type: 'Property',
        value: 'placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                title: formLabel,
                order: order,
                items: {
                    type: 'Property',
                    value: 'placeholder',
                    jsonSchema: {
                        type: 'Property',
                        value: { ...propertySchemaDefinition, title: formLabelPerItem },
                    },
                },
            },
        },
    };
};

type GetMultiRelationshipPropParams = {
    formLabel: string;
    formLabelPerItem: string;
    targetTemplateObjectId: string;
    minimum?: number;
    maximum?: number;
} & ArrayWithoutSchemaType;
export const getMultiRelationshipProp = ({
    formLabel,
    formLabelPerItem,
    targetTemplateObjectId,
    minimum,
    maximum,
    ...rest
}: GetMultiRelationshipPropParams): StellioTemplateRelationship => {
    order++;
    return {
        type: 'Relationship',
        object: targetTemplateObjectId,
        jsonSchema: {
            type: 'Property',
            value: {
                ...rest,
                schemaType: 'array',
                order: order,
                title: formLabel,
                minimum: minimum,
                maximum: maximum,
                items: {
                    type: 'Relationship',
                    object: targetTemplateObjectId,
                    jsonSchema: {
                        type: 'Property',
                        value: {
                            schemaType: 'string',
                            title: formLabelPerItem,
                        },
                    },
                },
            },
        },
    };
};

export const getRelationshipProp = (formLabel: string, targetTemplateObjectId: string): StellioTemplateRelationship => {
    order++;
    return {
        type: 'Relationship',
        object: targetTemplateObjectId,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: formLabel,
                order: order,
            },
        },
    };
};

export const getGeoPropertyProp = (
    title: string,
    geometryType: 'Point' | 'LineString' | 'MultiLineString' | 'Polygon' | 'MultiPolygon'
): StellioTemplateGeoProp => {
    order++;
    return {
        type: 'GeoProperty',
        value: {
            type: geometryType,
            coordinates: [],
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: title,
                order: order,
            },
        },
    };
};
