import { StellioTemplate } from 'src/interfaces';
import { getGeoPropertyProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

export const RiverTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:River:Template',
    type: 'Template',
    name: {
        ...getSimpleTextProp('Name of the river'),
    },
    description: {
        ...getSimpleTextProp('Description of the river'),
    },
    location: {
        ...getGeoPropertyProp('Geographical location of the river', 'LineString'),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'River',
            title: 'River',
            required: ['name', 'location'],
            minimum: 1,
            description: 'Digital twin of the river',
        },
    },
};
