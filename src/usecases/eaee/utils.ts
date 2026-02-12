import { StellioTemplateJsonProp, StellioTemplateProp, StellioTemplateRelationship } from '../../interfaces';

let order = 0;

export const getStructureJsonProp = (json: Record<string, string>): StellioTemplateJsonProp => {
    return {
        type: 'JsonProperty',
        json: json,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'json',
                title: 'Configuration de la catégorie',
                canSelfInit: true,
            },
        },
    };
};

export const getDisplayNameProp = (name: string): StellioTemplateProp => {
    return {
        type: 'Property',
        value: name,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: "Nom d'affichage de la colonne",
                canSelfInit: true,
            },
        },
    };
};

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

export const getDateProp = (title: string): StellioTemplateProp => {
    return {
        type: 'Property',
        value: new Date(),
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'date',
                title: title,
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
