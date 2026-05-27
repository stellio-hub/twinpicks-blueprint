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
        ...getEnumProp('Source of the control point', ['sensor', 'lab', 'citizen']),
    },
    ph: {
        ...getIntegerProp('pH value of the control point', 0, 14),
    },
    temperature: {
        ...getIntegerProp('Temperature of the control point', -20, 100),
    },
    conductivity: {
        ...getIntegerProp('Conductivity of the control point', 0, 1000),
    },
    dissolvedOxygen: {
        ...getIntegerProp('Dissolved oxygen of the control point', 0, 1000),
    },
    turbidity: {
        ...getIntegerProp('Turbidity of the control point', 0, 1000),
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
