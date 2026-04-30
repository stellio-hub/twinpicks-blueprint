import { StellioTemplate } from 'src/interfaces';
import { getGeoPropertyProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

export const RiverBasinTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:RiverBasin:Template',
    type: 'Template',
    name: {
        ...getSimpleTextProp('Name of the river basin'),
    },
    description: {
        ...getSimpleTextProp('Description of the river basin'),
    },
    location: {
        ...getGeoPropertyProp('Geographical location of the river basin', 'Polygon'),
    },
    outlet: {
        ...getGeoPropertyProp('Outlet of the river basin', 'Point'),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'RiverBasin',
            title: 'River basin',
            required: ['name', 'location'],
            minimum: 1,
            description: 'Digital twin of the river basin',
        },
    },
};
