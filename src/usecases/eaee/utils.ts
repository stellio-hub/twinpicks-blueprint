import { StellioTemplateJsonProp, StellioTemplateProp } from '../../interfaces';

export const getClassificationJsonProp = (json: Record<string, string>): StellioTemplateJsonProp => {
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

export const presenceAbsenceEnumValues = ['C', 'A', 'N', 'D'];
export const filtreXEnumValues = ['OK', 'X', '+', 'A évaluer'];
export const incertitudeEnumValues = ['Faible', 'Fort', 'NA'];
export const probabiliteEnumValues = ['Probable', 'Possible', 'Peu Probable'];
