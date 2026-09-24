import { StellioTemplate } from 'src/interfaces';
import { getGeoPropertyProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

const entityType = 'StormTank';

export const StormTankTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Name of the storm tank' }),
    },
    location: {
        ...getGeoPropertyProp({ formLabel: 'Location of the storm tank', geometryType: 'Point' }),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Storm tank',
            required: ['name', 'location'],
            description: 'Digital twin of the storm tank',
            minimum: 0,
        },
    },
};
