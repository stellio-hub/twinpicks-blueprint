import { StellioTemplate } from 'src/interfaces';
import { getGeoPropertyProp, getRelationshipProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

const entityType = 'WaterTreatmentPlant';

export const WaterTreatmentPlantTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Name of the water treatment plant' }),
    },
    location: {
        ...getGeoPropertyProp({ formLabel: 'Location of the water treatment plant', geometryType: 'Point' }),
    },
    dischargesTo: {
        ...getRelationshipProp('Discharges to the water treatment plant', 'urn:ngsi-ld:River:Template'),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Water treatment plant',
            required: ['name', 'location'],
            description: 'Digital twin of a water treatment plant',
            minimum: 0,
        },
    },
};
