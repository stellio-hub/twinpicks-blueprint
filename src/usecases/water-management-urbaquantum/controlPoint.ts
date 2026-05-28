import { StellioTemplate } from 'src/interfaces';
import { getEnumProp, getGeoPropertyProp, getIntegerProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

export const ControlPointTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:ControlPoint:Template',
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Name of the control point' }),
    },
    location: {
        ...getGeoPropertyProp('Location of the control point', 'Point'),
    },
    source: {
        ...getEnumProp({ title: 'Source of the control point', enum: ['sensor', 'lab', 'citizen'] }),
    },
    ph: {
        ...getIntegerProp({ title: 'pH value of the control point', minimum: 0, maximum: 14 }),
    },
    temperature: {
        ...getIntegerProp({ title: 'Temperature of the control point', minimum: -20, maximum: 100 }),
    },
    conductivity: {
        ...getIntegerProp({ title: 'Conductivity of the control point', minimum: 0, maximum: 1000 }),
    },
    dissolvedOxygen: {
        ...getIntegerProp({ title: 'Dissolved oxygen of the control point', minimum: 0, maximum: 1000 }),
    },
    turbidity: {
        ...getIntegerProp({ title: 'Turbidity of the control point', minimum: 0, maximum: 1000 }),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'ControlPoint',
            title: 'Control point',
            required: ['name', 'location', 'source'],
            description: 'Digital twin of a control point',
            minimum: 0,
        },
    },
};
