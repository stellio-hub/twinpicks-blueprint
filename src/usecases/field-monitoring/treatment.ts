import { StellioTemplate } from 'src/interfaces';

export const TreatmentTemplate: StellioTemplate = {
  id: 'urn:ngsi-ld:Treatment:Template',
  type: 'Template',
  name: {
    type: 'Property',
    value: 'Placeholder',
    jsonSchema: {
      type: 'Property',
      value: {
        schemaType: 'string',
        title: 'Name of the treatment',
        friendlyAttributeName: 'Name',
      },
    },
  },
  description: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: 'Description' },
        },
    },
  jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "Treatment",
            title: "Treatment",
            minimum: 0,
            required: ['name','description'],
            description: `This represents a Treatment`,
        },  
    }
};