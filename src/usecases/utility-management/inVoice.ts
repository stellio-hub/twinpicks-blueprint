import { StellioTemplate } from 'src/interfaces';
import { getSimpleTextProp, getDateProp, getIntegerProp ,getRelationshipProp,getMultiRelationshipProp} from '../../utils/blueprintHelpers';

const entityType = 'InVoice';

export const InVoiceTemplate: StellioTemplate = {


    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    supplierReference: {
        ...getSimpleTextProp({ title: 'Référence fournisseur' }),
    },
    invoiceNumber: {
        ...getSimpleTextProp({ title: 'Numéro de facture' }),
    },
    startDate: {
        ...getDateProp({ title: 'Date de facture' }),
    },
    totalCostHT: {
        ...getIntegerProp({ title: 'Montant de facture' }),
    },
    relatedDeliveryPoint: {
        ...getRelationshipProp("DeliveryPoint","urn:ngsi-ld:DeliveryPoint:Template")
    },
    relatedDeliveryPoints: {
        ...getMultiRelationshipProp({
            formLabel: "hab",
            formLabelPerItem: "cabc",
            templateObjectId: "urn:ngsi-ld:DeliveryPoint:Template",
            minimum: 0,
        })
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: "Invoice",
            required: ['supplierReference', 'startDate',"relatedDeliveryPoints"],
            description: `jjcjo`,
            minimum: 0,
        },
    },
};