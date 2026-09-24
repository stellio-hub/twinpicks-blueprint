import { StellioTemplate } from 'src/interfaces';
import { getGeoPropertyProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

const entityType = 'RiverBasin';

export const RiverBasinTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Name of the river basin' }),
    },
    description: {
        ...getSimpleTextProp({ title: 'Description of the river basin' }),
    },
    location: {
        ...getGeoPropertyProp({ formLabel: 'Geographical location of the river basin', geometryType: 'Polygon' }),
    },
    outlet: {
        ...getGeoPropertyProp({ formLabel: 'Outlet of the river basin', geometryType: 'Point' }),
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
