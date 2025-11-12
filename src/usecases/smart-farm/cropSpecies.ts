import { StellioTemplate } from 'src/interfaces';

export const cropSpeciesTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:CropSpecies:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    yield: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'int', title: 'yield' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "CropSpecies",
            title: "Crop Species",
            minimum: 1,
            required: ['name','yield'],
            description: `This represents a crop Species`,
        },
    },
};