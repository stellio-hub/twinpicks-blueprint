import { StellioTemplate } from 'src/interfaces';
import { getGeoPropertyProp, getMultiRelationshipProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

export const CombinedSewerTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:CombinedSewer:Template',
    type: 'Template',
    name: {
        ...getSimpleTextProp('Name of the combined sewer'),
    },
    location: {
        ...getGeoPropertyProp('Geographical representation of the combined sewer', 'LineString'),
    },
    dischargesTo: {
        ...getMultiRelationshipProp({
            formLabel: 'List of rivers that receive flows from the combined sewer',
            formLabelPerItem: 'Select a river',
            templateObjectId: 'urn:ngsi-ld:River:Template',
        }),
    },
    refControlPoint: {
        ...getMultiRelationshipProp({
            formLabel: 'List of control points',
            formLabelPerItem: 'Select a control point',
            templateObjectId: 'urn:ngsi-ld:ControlPoint:Template',
        }),
    },
    refSamplingPoint: {
        ...getMultiRelationshipProp({
            formLabel: 'List of sampling points',
            formLabelPerItem: 'Select a sampling point',
            templateObjectId: 'urn:ngsi-ld:SamplingPoint:Template',
        }),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'CombinedSewer',
            title: 'Combined sewer',
            required: ['name', 'location'],
            description: 'Digital twin of a combined sewer',
            minimum: 0,
        },
    },
};
