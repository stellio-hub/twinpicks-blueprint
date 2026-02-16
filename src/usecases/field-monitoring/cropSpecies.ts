import { StellioTemplate } from 'src/interfaces';


export const cropSpeciesTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:CropSpecies:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',
                title: 'Name' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "CropSpecies",
            title: "Crop Species",
            minimum: 0,
            required: ['name'],
            description: `This represents a crop Species`,
        },
    },
};