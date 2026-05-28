import { StellioTemplate } from 'src/interfaces';
import {
    getDateProp,
    getSimpleTextProp,
    getIntegerProp,
    getRelationshipProp,
    getMultiRelationshipProp,
    getEnumProp,
} from '../../utils/blueprintHelpers';

const entityType = 'RecurringRule';

export const RecurringRuleTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Programme',
            minimum: 0,
            required: [
                'name',
                'managedZones',
                'startTime',
                'duration',
                'activationDaysMode',
                'repetitionRulePerDayCount',
                'repetitionRulePerDayInterval',
                'irrigationArea',
                'managedZones',
                'status',
            ],
            description: "Un programme d'irrigation applicable à une zone d'irrigation et ses zones de gestion",
        },
    },

    // #region Properties
    name: { ...getSimpleTextProp({ title: 'Nom de la règle récurrente' }) },
    startTime: { ...getDateProp({ title: 'Heure de départ', dateMode: 'time' }) },
    duration: { ...getIntegerProp('Durée (en minutes)', 1, 120) },

    activationDaysMode: {
        ...getEnumProp("Mode d'activation des jours", ['Tous les deux jours', 'Jours spécifiques']),
    },
    everySecondDayWeekStartDay: {
        ...getEnumProp('Jour de démarrage de la règle tous les 2 jours', [
            'Lundi',
            'Mardi',
            'Mercredi',
            'Jeudi',
            'Vendredi',
            'Samedi',
            'Dimanche',
        ]),
    },
    specificActivationWeekDays: {
        ...getEnumProp(
            "Jours d'activation spécifiques",
            ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'],
            true
        ),
    },

    repetitionRulePerDayCount: { ...getIntegerProp('Nombre de répétitions par jour', 1, 10) },
    repetitionRulePerDayFrequency: {
        type: 'Property',
        value: 'MINUTELY',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                canSelfInit: true,
            },
        },
    },
    repetitionRulePerDayInterval: { ...getIntegerProp('Intervalle entre les répétitions (en minutes)', 1, 120) },

    irrigationArea: {
        ...getRelationshipProp("Zone d'irrigation cible du programme", 'urn:ngsi-ld:IrrigationArea:Template'),
    },
    managedZones: {
        ...getMultiRelationshipProp({
            formLabel:
                "Zones gérées (attention à bien sélectionner les zones au sein de la zone d'irrigation sélectionnée précédemment)",
            formLabelPerItem: 'Sélectionner une zone gérée',
            templateObjectId: 'urn:ngsi-ld:ManagedZone:Template',
        }),
    },

    status: {
        ...getEnumProp("Statut de la règle (pour ancien Econom'O, choisir 'documentationOnly')", [
            'documentationOnly',
            'inactive',
        ]),
    },
    // #endregion
};
