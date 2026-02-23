import { StellioTemplate } from 'src/interfaces';

const weedSpeciesCategories = [
    "Field Thistle (Cirsium arvense)",
    "White Goosefoot (Chenopodium album)",
    "Common Lambsquarters (Chenopodium album)",
    "Black Nightshade (Solanum nigrum)",
    "Annual Meadow Grass (Poa annua)",
    "Common Chickweed (Stellaria media)",
    "Barnyard Grass (Echinochloa crus-galli)",
    "Dandelion (Taraxacum officinale)",
    "Annual fleabane (Erigeron annuus)",
    "Hoary plantain (Plantago media)",
    "Common couchgrass (Elymus repens)",
    "Dove-foot geranium (Geranium molle)",
    "Common pimpernel (Lysimachia arvensis)",
    "Bird's tare (Vicia cracca)",
    "Common speedwell (Veronica persica)",
    "Shepherd's purse (Capsella bursa-pastoris)",
    "Hemlock (Conium maculatum)",
    "Yellow sorrel (Oxalis stricta)",
    "Common yarrow (Achillea millefolium)",
    "Purple archangel (Lamium purpureum)",
    "Daisy (Bellis perennis)",
    "Other",
]


export const WeedSpeciesTemplate: StellioTemplate = {
    id: `urn:ngsi-ld:WeedSpecies:Template`,
    type: 'Template',
    name: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: { schemaType: 'string',
                enum: weedSpeciesCategories,
                title: 'Name' },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: "WeedSpecies",
            title: "Weed Species",
            minimum: 0,
            required: ['name'],
            description: `This represents a Weed Species`,
        },
    },
};