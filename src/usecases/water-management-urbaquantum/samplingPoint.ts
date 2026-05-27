import { StellioTemplate } from 'src/interfaces';
import { getEnumProp, getGeoPropertyProp, getIntegerProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

export const SamplingPointTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:SamplingPoint:Template',
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Name of the sampling point' }),
    },
    location: {
        ...getGeoPropertyProp('Location of the sampling point', 'Point'),
    },
    source: {
        ...getEnumProp('Source of the sampling point', ['sensor', 'lab', 'citizen']),
    },
    sampleVolume: {
        ...getIntegerProp('Sample volume of the sampling point'),
    },
    usage: {
        ...getEnumProp('Usage of the sampling point', ['drinking', 'agricultural', 'industrial', 'unknown', 'other']),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'SamplingPoint',
            title: 'Sampling point',
            required: ['name', 'location', 'source', 'usage'],
            description: 'Digital twin of a sampling point',
            minimum: 0,
        },
    },
};
