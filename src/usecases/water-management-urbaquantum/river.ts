import { StellioTemplate } from 'src/interfaces';
import {
    getGeoPropertyProp,
    getMultiRelationshipProp,
    getRelationshipProp,
    getSimpleTextProp,
} from '../../utils/blueprintHelpers';

export const RiverTemplate: StellioTemplate = {
    id: 'urn:ngsi-ld:River:Template',
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Name of the river' }),
    },
    description: {
        ...getSimpleTextProp({ title: 'Description of the river' }),
    },
    location: {
        ...getGeoPropertyProp('Geographical location of the river', 'LineString'),
    },
    hasRiverBasin: {
        ...getRelationshipProp('River basin of the river', 'urn:ngsi-ld:RiverBasin:Template'),
    },
    flowsFrom: {
        ...getMultiRelationshipProp({
            formLabel: 'List of input rivers',
            formLabelPerItem: 'Select an input river',
            targetTemplateObjectId: 'urn:ngsi-ld:River:Template',
        }),
    },
    flowsTo: {
        ...getMultiRelationshipProp({
            formLabel: 'List of output rivers',
            formLabelPerItem: 'Select an output river',
            targetTemplateObjectId: 'urn:ngsi-ld:River:Template',
        }),
    },
    hasStormTank: {
        ...getMultiRelationshipProp({
            formLabel: 'List of Storm tanks of the river',
            formLabelPerItem: 'Storm tank',
            targetTemplateObjectId: 'urn:ngsi-ld:StormTank:Template',
        }),
    },
    refControlPoint: {
        ...getMultiRelationshipProp({
            formLabel: 'List of control points',
            formLabelPerItem: 'Select a control point',
            targetTemplateObjectId: 'urn:ngsi-ld:ControlPoint:Template',
        }),
    },
    refSamplingPoint: {
        ...getMultiRelationshipProp({
            formLabel: 'List of sampling points',
            formLabelPerItem: 'Select a sampling point',
            targetTemplateObjectId: 'urn:ngsi-ld:SamplingPoint:Template',
        }),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: 'River',
            title: 'River',
            required: ['name', 'location'],
            minimum: 1,
            description: 'Digital twin of the river',
        },
    },
};
