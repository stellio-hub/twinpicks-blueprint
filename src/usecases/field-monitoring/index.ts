import { agriCropTemplate } from './agriCrop';
import { agriParcelTemplate } from './agriParcel';
import { agriParcelAreaTemplate } from './agriParcelArea';
import { agriWeedTemplate } from './agriWeed';
import { cropSpeciesTemplate } from './cropSpecies';
import { ReferenceSoilAreaTemplate } from './referenceSoilArea';
import { WeatherInformationTemplate } from './weatherInformation';
import { weedSpeciesTemplate } from './weedSpecies';
import { TreatmentTemplate } from './treatment';

import { generateBlueprintFile } from '../../utils';

const blueprint = [
    agriParcelTemplate,
    agriParcelAreaTemplate,
    agriCropTemplate,
    ReferenceSoilAreaTemplate,
    agriWeedTemplate,
    WeatherInformationTemplate,
    cropSpeciesTemplate,
    weedSpeciesTemplate,
    TreatmentTemplate,
];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
