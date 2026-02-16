import { StellioTemplate } from 'src/interfaces';


export const weedSpeciesTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:WeedSpecies:Template`,
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
            schemaType: "WeedSpecies",
            title: "Weed Species",
            minimum: 0,
            required: ['name'],
            description: `This represents a Weed Species`,
        },
    },
};