import { StellioTemplate } from 'src/interfaces';

export const weedSpeciesTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:WeedSpecies:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Nom' },
        },
    },
    number: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'int', title: 'number' },
        },
    },
    biomass: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'biomass' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "WeedSpecies",
            title: "Weed Species",
            minimum: 1,
            required: ['name','number','biomass'],
            description: `This represents a Weed Species`,
        },
    },
};