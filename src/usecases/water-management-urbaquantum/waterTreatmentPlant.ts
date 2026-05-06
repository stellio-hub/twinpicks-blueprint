import { StellioTemplate } from 'src/interfaces';
import { getGeoPropertyProp, getRelationshipProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

export const WaterTreatmentPlantTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:WaterTreatmentPlant:Template',
    type: 'Template',
    name: {
        ...getSimpleTextProp('Name of the water treatment plant'),
    },
    location: {
        ...getGeoPropertyProp('Location of the water treatment plant', 'Point'),
    },
    dischargesTo: {
        ...getRelationshipProp('Discharges to the water treatment plant', 'urn:ngsi-ld:River:Template'),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'WaterTreatmentPlant',
            title: 'Water treatment plant',
            required: ['name', 'location'],
            description: 'Digital twin of a water treatment plant',
            minimum: 0,
        },
    },
};
