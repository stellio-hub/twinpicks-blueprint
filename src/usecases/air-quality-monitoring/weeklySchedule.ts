import { StellioTemplate } from 'src/interfaces';
import { getDateProp, getEnumProp, getMultiAttributeProp, getSimpleTextProp } from '../../utils/blueprintHelpers';

const entityType = 'WeeklySchedule';

export const WeeklyScheduleTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        ...getSimpleTextProp({ title: 'Nom du planning', friendlyAttributeName: 'Nom' }),
    },
    timeSlots: {
        ...getMultiAttributeProp({
            propertySchemaDefinition: { schemaType: 'string' },
            formLabel: 'Créneaux horaires',
            formLabelPerItem: 'Libellé du créneau (optionnel)',
            subProps: [
                [
                    'days',
                    getEnumProp({
                        title: 'Jours',
                        enum: [1, 2, 3, 4, 5, 6, 7],
                        allowMultiple: true,
                    }),
                ],
                ['startTime', getDateProp({ title: 'Heure de début', dateMode: 'time' })],
                ['endTime', getDateProp({ title: 'Heure de fin', dateMode: 'time' })],
            ],
        }),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Planning hebdomadaire',
            minimum: 0,
            required: ['name', 'timeSlots'],
            description: "Planning hebdomadaire composé d'un ou plusieurs créneaux horaires",
        },
    },
};
