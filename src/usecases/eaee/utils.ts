import { StellioTemplateJsonProp, StellioTemplateProp } from 'src/interfaces';

const getStructureJsonProp = (json: Record<string, string>): StellioTemplateJsonProp => {
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

const getDisplayNameProp = (name: string): StellioTemplateProp => {
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

const getSimpleTextProp = (title: string, order?: number): StellioTemplateProp => {
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

const getDateProp = (title: string, order?: number): StellioTemplateProp => {
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

export { getStructureJsonProp, getDisplayNameProp, getSimpleTextProp, getDateProp };
