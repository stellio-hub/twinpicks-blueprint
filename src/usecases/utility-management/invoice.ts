import { StellioTemplate } from 'src/interfaces';
import { getSimpleTextProp, getDateProp, getIntegerProp, getRelationshipProp, getMultiAttributeProp } from '../../utils/blueprintHelpers';

const entityType = 'Invoice';

export const InvoiceTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    supplierReference: {
        ...getSimpleTextProp({ title: 'Référence fournisseur', friendlyAttributeName: 'Référence' }),
    },
    invoiceNumber: {
        ...getSimpleTextProp({ title: 'Numéro de facture' }),
    },
    startAt: {
        ...getDateProp({ title: 'Date de début' }),
    },
    endAt: {
        ...getDateProp({ title: 'Date de fin' }),
    },
    oldIndex: {
        ...getIntegerProp({ title: 'Ancien index', minimum: 0 }),
    },
    newIndex: {
        ...getIntegerProp({ title: 'Nouvel index', minimum: 0 }),
    },
    totalCostHT: {
        ...getIntegerProp({ title: 'Montant total HT', minimum: 0 }),
    },
    totalCostTTC: {
        ...getIntegerProp({ title: 'Montant total TTC', minimum: 0 }),
    },
    taxes: {
        ...getIntegerProp({ title: 'Montant des taxes', minimum: 0 }),
    },
    invoiceLines: {
        ...getMultiAttributeProp({
            schemaType: 'string',
            formLabel: 'Lignes de facture',
            formLabelPerItem: 'Ligne de facture',
            subProps: [
                ['item', getSimpleTextProp({ title: 'Article' })],
                ['quantity', getIntegerProp({ title: 'Quantité', minimum: 0 })],
                ['unit', getSimpleTextProp({ title: 'Unité' })],
                ['unitCost', getIntegerProp({ title: 'Coût unitaire', minimum: 0 })],
            ],
        }),
    },
    relatedDeliveryPoint: {
        ...getRelationshipProp('Point de livraison', 'urn:ngsi-ld:DeliveryPoint:Template'),
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Facture',
            required: ['invoiceNumber', 'supplierReference', 'startAt', 'endAt', 'relatedDeliveryPoint'],
            description:
                'Facture énergétique rattachée à un point de livraison, avec période de facturation, index de compteur et lignes de facture.',
            minimum: 0,
            identifier: 'invoiceNumber',
        },
    },
};
