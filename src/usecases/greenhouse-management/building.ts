import { StellioTemplate } from 'src/interfaces';

export const entityType = 'Building';

export const buildingCategories = [
    'Abri (shed)',
    'Abri à ordures (garbage_shed)',
    'Abri voiture (carport)',
    'Appartements (apartments)',
    'Bâtiment annexe de ferme (farm_auxiliary)',
    'Bâtiment public (civic)',
    'Boulangerie (bakehouse)',
    'Bungalow (bungalow)',
    'Bunker (bunker)',
    'Bureau (office)',
    'Cabane (cabin)',
    'Caravane fixe (static_caravan)',
    'Cathédrale (cathedral)',
    'Chantier (construction)',
    'Chapelle (chapel)',
    "Château d'eau (water_tower)",
    'Commerce (retail)',
    'Commercial (commercial)',
    'Digesteur (digester)',
    'Dortoir (dormitory)',
    'Ecole (school)',
    'Ecurie (stable)',
    'Eglise (church)',
    'Entrepôt (warehouse)',
    'Etable (cowshed)',
    'Ferme (farm)',
    'Garage (garage)',
    'Garages (garages)',
    'Gare (train_station)',
    'Grange (barn)',
    'Hangar (hangar)',
    'Hôpital (hospital)',
    'Hôtel (hotel)',
    'Hutte (hut)',
    'Industriel (industrial)',
    "Jardin d'enfants (kindergarten)",
    'Kiosque (kiosk)',
    'Maison (house)',
    'Maison individuelle (detached)',
    'Maison mitoyenne (terrace)',
    'Manège (riding_hall)',
    'Mosquée (mosque)',
    'Parking (parking)',
    'Pavillon (pavilion)',
    'Péniche (houseboat)',
    'Pont (bridge)',
    'Porcherie (sty)',
    'Poste de transformation (transformer_tower)',
    'Public (public)',
    'Résidentiel (residential)',
    'Ruines (ruins)',
    'Sanctuaire (shrine)',
    'Serre (greenhouse)',
    'Service (service)',
    'Stade (stadium)',
    'Synagogue (synagogue)',
    'Temple (temple)',
    'Toit (roof)',
    'Transport (transportation)',
    'Tribune (grandstand)',
    'Université (university)',
    'Véranda (conservatory)',
];

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
                title: 'Nom du bâtiment',
            },
        },
    },
    description: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                title: 'Description du bâtiment',
            },
        },
    },
    location: {
        type: 'GeoProperty',
        value: {
            type: 'Point',
            coordinates: [],
        },
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'object',
                title: 'Où se situe le bâtiment',
            },
        },
    },
    category: {
        type: 'Property',
        value: 'Placeholder',
        jsonSchema: {
            type: 'Property',
            value: {
                schemaType: 'string',
                enum: buildingCategories,
                title: `Sélectionner une categorie`,
                friendlyAttributeName: 'Categorie',
            },
        },
    },
    jsonSchema: {
        type: 'Property',
        value: {
            schemaType: entityType,
            title: 'Bâtiment',
            required: ['name', 'location', 'category'],
            minimum: 1,
            description: "Représentation numérique du bâtiment d'où proviennent les données",
        },
    },
};

export default template;
