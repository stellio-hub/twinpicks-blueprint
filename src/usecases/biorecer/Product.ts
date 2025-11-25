import { StellioTemplate } from 'src/interfaces';
import { entityType as KpiEntityType } from './KeyPerformanceIndicator';

const entityType = 'Product';
const entityTypeTitle = 'Product';

const template: StellioTemplate = {
    id: `urn:ngsi-ld:${entityType}:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: `Name of the ${entityTypeTitle}`,
                friendlyAttributeName: 'Name',
                order: 1,
            },
        },
    },
    typeOfProduct: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                enum: ['Main Product', 'Residue or by-product', 'Raw material'],
                title: `What is the type of the product?`,
                friendlyAttributeName: 'Type of product',
                order: 2,
            },
        },
    },
    imageSrc: {
        type: 'Property',
        value: 'Image',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string', title: `Path to the image`, friendlyAttributeName: 'Image', order: 3 },
        },
    },
    mass: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                title: `Specify the total amount or total weight (kg) in dry mass of the product`,
                friendlyAttributeName: 'Total amount',
                order: 4,
            },
        },
    },
    isStoredIn: {
        type: 'Relationship',
        object: 'List:of:template',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: `What's the last known storage location of this ${entityTypeTitle}?`,
                friendlyAttributeName: 'Last known storage location',
                listOfAllowedRelationships: ['urn:ngsi-ld:Storage:Template', 'urn:ngsi-ld:ProductionSystem:Template'],
                order: 5,
            },
        },
    },
    hasKpi: {
        type: 'Relationship',
        object: `urn:ngsi-ld:${KpiEntityType}:Template`,
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                format: 'uri',
                title: `Key performance indicator (or Circularity Indicator) of this ${entityTypeTitle}?`,
                friendlyAttributeName: 'Key performance indicator',
                order: 6,
            },
        },
    },
    reusedFraction: {
        type: 'Property',
        value: 2,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Reused Fraction',
                title: '(If Processor or Manufacturer) Specify the percentage (%) of the total dry mass of the residue or by-product that is reused',
                order: 7,
            },
        },
    },
    unavoidableResidueShare: {
        type: 'Property',
        value: 50,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Unavoidable Residue Share',
                title: '(If residue and actor role is Primary producer) Specify the percentage (%) of the total dry mass of the residue or by-product that is considered as unavoidable',
                order: 8,
            },
        },
    },
    unavoidableContentOfByProduct: {
        type: 'Property',
        value: 50,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Unavoidable Content',
                title: '(If Processor or Manufacturer) Specify the percentage (%) of the total dry mass of by-product that is considered as unavoidable',
                order: 9,
            },
        },
    },
    sustainableRemovalShare: {
        type: 'Property',
        value: 50,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Sustainable Removal Share',
                title: '(If residue and actor role is Primary producer) Please provide the percentage (%) of the sustainable removal rate for residues regarding your activity',
                order: 10,
            },
        },
    },
    massOfResidueForFineChemicals: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass of residue for fine chemicals',
                title: '(If residue and actor role is Primary producer) Please provide the total dry mass (kg) of generated residue used as feedstock for pharmaceuticals or fine chemicals',
                order: 11,
            },
        },
    },
    massOfResidueForFood: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass Of Residue For Food',
                title: '(If residue and actor role is Primary producer) Please provide the total dry mass (kg) of generated residue used for food or feed',
                order: 12,
            },
        },
    },
    massOfResidueForBioplastics: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass Of Residue For Bioplastics',
                title: '(If residue and actor role is Primary producer) Please provide the total dry mass (kg) of generated residue used for bioplastics or polymers',
                order: 13,
            },
        },
    },
    massOfResidueForBulkChemicals: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass Of Residue For Bulk Chemicals',
                title: '(If residue and actor role is Primary producer) Please provide the total dry mass (kg) of generated residue used for bulk chemicals or materials',
                order: 14,
            },
        },
    },
    massOfResidueForEnergy: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass Of Residue For Energy',
                title: '(If residue and actor role is Primary producer) Please provide the total dry mass (kg) of generated residue used for energy, heat or fuel',
                order: 15,
            },
        },
    },
    massOfLeftOnFieldResidue: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass Of Left On Field Residue',
                title: '(If residue and actor role is Primary producer) Please provide the total dry mass (kg) of generated residue left on field',
                order: 16,
            },
        },
    },
    massOfLostResidue: {
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass Of Lost Residue',
                title: '(If residue and actor role is Primary producer) Please provide the total dry mass (kg) of generated residue being landfilled, burnt, lost, etc.',
                order: 17,
            },
        },
    },
    sewageSludgeProducedSentForValorisation: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q5',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Sewage Sludge Produced Sent For Valorisation',
                title: '(If Sewage Sludge) Specify the total amount or total weight of Sewage Sludge produced  by the wastewater treatment process(es) (disclosed and undisclosed) that is sent for valorisation i.e. anaerobic digestion (in kg of dry mass)',
                order: 18,
            },
        },
    },
    sewageSludgeProducedNotSentForValorisation: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q6',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Sewage Sludge Produced Not Sent For Valorisation',
                title: '(If Sewage Sludge) Specify the total amount or total weight of Sewage Sludge produced by the wastewater treatment process(es) (disclosed and undisclosed) that is NOT sent for valorisation i.e. landfill (in kg of dry mass)',
                order: 19,
            },
        },
    },
    sewageAmountOfCodRemoved: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q7',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Total weight of COD removed',
                title: '(If Sewage Sludge) Specify the total amount or total weight of COD removed by the wastewater treatment process(es) that produced the total (disclosed and undisclosed) mass of sewage sludge (in kg of dry mass)',
                order: 20,
            },
        },
    },
    sewageVolumeTreated: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q8',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Total volume of wastewater treated',
                title: '(If Sewage Sludge) Specify the total amount or total volume of wastewater treated by the wastewater treatment process(es) that produced the total (disclosed and undisclosed) mass of sewage sludge (in kg of dry mass)',
                order: 21,
            },
        },
    },
    afpwOrganicMassFraction: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q9',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Organic mass fraction',
                title: '(If Agro-food Processing Waste) What is the organic mass fraction of this waste stream from the processed food biomass (in %)?',
                order: 22,
            },
        },
    },
    afpwCertifiedOrganicMassFraction: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q10',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Certified Organic mass fraction',
                title: '(If Agro-food Processing Waste) What fraction of the organic mass fraction provided in the previous question is certified as renewable (in %)?',
                order: 23,
            },
        },
    },
    afpwFractionFromBatchChanges: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q11',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Fraction from batch changes',
                title: '(If Agro-food Processing Waste) What fraction of the waste is from batch changes and/or productions ends (in %)?',
                order: 24,
            },
        },
    },
    afoetwSentForValorisation: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q12',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Onsite Effluent sent for valorisation',
                title: '(If Agro-food Onsite Effluent Treatment Waste) Specify the total amount or total weight of Onsite Effluent Treatment Waste produced (disclosed and undisclosed) that is sent for valorisation i.e. anaerobic digestion (in kg of dry mass)?',
                order: 25,
            },
        },
    },
    afoetwNotSentForValorisation: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q13',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Onsite Effluent not sent for valorisation',
                title: '(If Agro-food Onsite Effluent Treatment Waste) Specify the total amount or total weight of Onsite Effluent Treatment Waste produced (disclosed and undisclosed) that is NOT sent for valorisation i.e. landfill (in kg of dry mass)',
                order: 26,
            },
        },
    },
    afoetwMassOfBodRemoved: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q14',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Mass of BOD removed by Onsite Effluent',
                title: '(If Agro-food Onsite Effluent Treatment Waste) What mass of BOD removed by the Onsite Effluent Treatment process?',
                order: 27,
            },
        },
    },
    ofmswBiodegradableFraction: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q15',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'P1',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'Biodegradable fraction of the OFMSW',
                title: '(If OFMSW) What is the organic, biodegradable fraction of the OFMSW (in %)?',
                order: 28,
            },
        },
    },
    ofmswSentForValorisation: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q16',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'OFMSW sent for valorisation',
                title: '(If OFMSW) Specify the total amount or total weight of OFMSW produced (disclosed and undisclosed) that is sent for valorisation i.e. anaerobic digestion (in kg of dry mass)?',
                order: 29,
            },
        },
    },
    ofmswNotSentForValorisation: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q17',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'OFMSW not sent for valorisation',
                title: '(If OFMSW) Specify the total amount or total weight of OFMSW produced (disclosed and undisclosed) that is NOT sent for valorisation i.e. landfill (in kg of dry mass)',
                order: 30,
            },
        },
    },
    ofmswProductionRate: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q18',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'OFMSW production rate',
                title: '(If OFMSW) Specify the production rate of the disclosed and undisclosed OFMSW by the respective treatment plant(s) (in kg/capita.year)',
                order: 31,
            },
        },
    },
    ofmswProductionTarget: {
        relatedCiQuestion: {
            type: 'Property',
            value: 'Waste Managers Q19',
            jsonSchema: {
                type: 'Property',
                value: {
                    canSelfInit: true,
                },
            },
        },
        type: 'Property',
        value: 1,
        unitCode: 'KGM',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'integer',
                friendlyAttributeName: 'OFMSW production target',
                title: '(If OFMSW) Specify the OFMSW production target of the region (in kg/capita.year)',
                order: 32,
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: entityTypeTitle,
            minimum: 1,
            required: ['name', 'typeOfProduct'],
            description: `This is a product. It can be anything, a raw material, a chemical, a final object...`,
        },
    },
};

export default template;
