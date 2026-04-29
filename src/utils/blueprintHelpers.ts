import { StellioTemplateGeoProp, StellioTemplateProp, StellioTemplateRelationship } from '../interfaces';

let order = 0;

export const getSimpleTextProp = (title: string): StellioTemplateProp => {
    order++;
    return {
        type: 'Property',
        value: title,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: title,
                order: order,
            },
        },
    };
};

export const getEnumProp = (title: string, enumValues: string[]): StellioTemplateProp => {
    order++;
    return {
        type: 'Property',
        value: enumValues[0],
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                enum: enumValues,
                title: title,
                order: order,
            },
        },
    };
};

export const getIntegerProp = (title: string, minimum = 0, maximum = 3): StellioTemplateProp => {
    order++;
    return {
        type: 'Property',
        value: 0,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                minimum: minimum,
                maximum: maximum,
                title: title,
                order: order,
            },
        },
    };
};

export const getBooleanProp = (title: string): StellioTemplateProp => {
    order++;
    return {
        type: 'Property',
        value: false,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'boolean',
                title: title,
                order: order,
            },
        },
    };
};

export const getDateProp = (title: string): StellioTemplateProp => {
    order++;
    return {
        type: 'Property',
        value: new Date(),
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'date',
                title: title,
                order: order,
            },
        },
    };
};

export const getMultiRelationshipProp = (
    formLabel: string,
    formLabelPerItem: string,
    templateObjectId: string
): StellioTemplateRelationship => {
    order++;
    return {
        type: 'Relationship',
        object: templateObjectId,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                order: order,
                title: formLabel,
                items: {
                    type: 'Relationship',
                    object: templateObjectId,
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
