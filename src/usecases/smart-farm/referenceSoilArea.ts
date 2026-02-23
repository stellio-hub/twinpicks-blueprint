import { StellioTemplate } from 'src/interfaces';

export const ReferenceSoilAreaTemplate: StellioTemplate = {
  id: 'urn:ngsi-ld:ReferenceSoilArea:Template',
  type: 'Template',
  name: {
    type: 'Property',
    value: 'Placeholder',
    jsonSchema: {
      type: 'Property',
      value: {
        schemaType: 'string',
        title: 'Name of the reference soil where the sensor is located',
        friendlyAttributeName: 'Name',
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
        title: 'Where are the sensor and the reference soil located?',
        friendlyAttributeName: 'Geolocation',
      },
    },
  },
  volumetricMoistureFieldCapacity: {
    type: 'Property',
    value: 'Placeholder',
    unitCode: 'H60',
    jsonSchema: {
      type: 'Property',
      value: {
        schemaType: 'number',
        title: 'vM_FC: Volumetric moisture value at field capacity',
        friendlyAttributeName: 'Volumetric moisture at field capacity',
        canSelfInit: true,
      },
    },
  },
  volumetricMoisturePermanentWiltingPoint: {
    type: 'Property',
    value: 'Placeholder',
    unitCode: 'H60',
    jsonSchema: {
      type: 'Property',
      value: {
        schemaType: 'number',
        title: 'vM_PWP: Volumetric moisture value at the permanent wilting point',
        friendlyAttributeName: 'Volumetric moisture at the permanent wilting point',
        canSelfInit: true,
      },
    },
  },
  volumetricMoistureSaturation: {
    type: 'Property',
    value: 'Placeholder',
    unitCode: 'H60',
    jsonSchema: {
      type: 'Property',
      value: {
        schemaType: 'number',
        title: 'vM_SAT: Volumetric moisture value at saturation',
        friendlyAttributeName: 'Volumetric moisture at saturation',
        canSelfInit: true,
      },
    },
  },
  cropCoefficient: {
    type: 'Property',
    value: 'Placeholder',
    jsonSchema: {
      type: 'Property',
      value: {
        schemaType: 'number',
        title: 'Kc: Crop coefficient',
        friendlyAttributeName: 'Crop coefficient',
        canSelfInit: true,
      },
    },
  },
  runoffCurveNumber: {
    type: 'Property',
    value: 'Placeholder',
    jsonSchema: {
      type: 'Property',
      value: {
        schemaType: 'number',
        title: 'CN2: Runoff coefficient',
        friendlyAttributeName: 'Runoff coefficient',
        canSelfInit: true,
      },
    },
  },
  soilDepth: {
    type: 'Property',
    value: 'Placeholder',
    unitCode: 'MMT',
    jsonSchema: {
      type: 'Property',
      value: {
        schemaType: 'number',
        title: 'Z: Soil depth',
        friendlyAttributeName: 'Soil depth',
        canSelfInit: true,
      },
    },
  },
  swcon: {
    type: 'Property',
    value: 'Placeholder',
    unitCode: 'H93',
    jsonSchema: {
      type: 'Property',
      value: {
        schemaType: 'number',
        title:
          'SWCON: Amount of water lost to percolation in 1 day relative to the amount of water that exceeds field capacity',
        friendlyAttributeName: 'SWCON',
        canSelfInit: true,
      },
    },
  },
  jsonSchema: {
    type: 'Property',
    value: {
      schemaType: 'ReferenceSoilArea',
      title: 'Reference soil for the sensor',
      minimum: 0,
      required: ['name', 'location'],
      description:
        'Representation of the soil area near the sensor. Used as a reference for data from the surrounding management zones',
    },
  },
};
