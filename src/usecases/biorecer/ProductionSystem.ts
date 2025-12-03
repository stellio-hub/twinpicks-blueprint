import { StellioTemplate } from 'src/interfaces';

const entityType = 'ProductionSystem';
const entityTypeTitle = 'Production System';

const template: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: `Name of the ${entityTypeTitle}`, friendlyAttributeName: 'Name' },
        },
    },
    location: {
        type: 'GeoProperty',
        value: {
            type: 'Point',
            coordinates: [],
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: `Where is located the ${entityTypeTitle}?`,
                friendlyAttributeName: 'Location',
            },
        },
    },
    hasTransformation: {
        type: 'Relationship',
        object: 'urn:ngsi-ld:Transformation:Template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'array',
                friendlyAttributeName: 'Transformations used',
                title: `What Transformation is used by this ${entityTypeTitle}?`,
                items: {
                    type: 'Relationship',
                    object: 'urn:ngsi-ld:Transformation:Template',
                    jsonSchema: {
                        type: 'Property',
                        value: {
                            schemaType: 'string',
                            format: `uri`,
                            title: `Select a Transformation`,
                        },
                    },
                },
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: entityTypeTitle,
            minimum: 0,
            required: ['name', 'location'],
            description: `Any mean of production which uses a process`,
        },
    },
};

export default template;
