import { StellioTemplate } from 'src/interfaces';
import { getGeoPropertyProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

export const StormTankTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:StormTank:Template',
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Name of the storm tank' }),
    },
    location: {
        ...getGeoPropertyProp('Location of the storm tank', 'Point'),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'StormTank',
            title: 'Storm tank',
            required: ['name', 'location'],
            description: 'Digital twin of the storm tank',
            minimum: 0,
        },
    },
};
