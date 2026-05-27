import { JsonSchema } from 'src/interfaces/jsonSchema';
import { StellioTemplateGeoProp, StellioTemplateProp, StellioTemplateRelationship } from 'src/interfaces';

let order = 0;

export const getSimpleTextProp = ({ title, ...rest }: Partial<JsonSchema>): StellioTemplateProp => {
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

export const getEnumProp = (title: string, enumValues: string[], allowMultiple = false): StellioTemplateProp => {
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
                allowMultiple,
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

export const getDateProp = ({
    title,
    dateMode = 'date',
}: {
    title: string;
    dateMode?: JsonSchema['dateMode'];
}): StellioTemplateProp => {
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
                dateMode,
            },
        },
    };
};

type MultiRelationshipProp = {
    formLabel: string;
    formLabelPerItem: string;
    templateObjectId: string;
    minimum?: number;
    maximum?: number;
};
export const getMultiRelationshipProp = ({
    formLabel,
    formLabelPerItem,
    templateObjectId,
    minimum,
    maximum,
}: MultiRelationshipProp): StellioTemplateRelationship => {
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
                minimum: minimum,
                maximum: maximum,
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
