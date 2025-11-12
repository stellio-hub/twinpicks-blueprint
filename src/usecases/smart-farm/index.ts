import { agriCampaignTemplate } from './agriCampaign';
import { agriCropTemplate } from './agriCrop';
import { agriItineraryTemplate } from './agriItinerary';
import { agriOperationTemplate } from './agriOperation';
import { agriParcelTemplate } from './agriParcel';
import { agriParcelAreaTemplate } from './agriParcelArea';
import { agriRessourceTemplate } from './agriRessource';
import { agriSampleTemplate } from './agriSample';
import { agronomicPracticesTemplate } from './agronomicPractices';
import { biologicalResultTemplate } from './biologicalResult';
import { caseStudyTemplate } from './caseStudy';
import { cropSpeciesTemplate } from './cropSpecies';
import { environmentalResultTemplate } from './environmentalResult';
import { socialEconomicTemplate } from './socialEconomic';
import { soilMicrobiomeTemplate } from './soilMicrobiome';
import { soilNutrientTemplate } from './soilNutrient';
import { weedSpeciesTemplate } from './weedSpecies';



import { generateBlueprintFile } from '../../utils';

const blueprint = [
    agriParcelTemplate,
    agriParcelAreaTemplate,
    agriCropTemplate,
    agriSampleTemplate,
    agronomicPracticesTemplate,
    caseStudyTemplate,
    socialEconomicTemplate,
    agriCampaignTemplate,
    agriItineraryTemplate,
    agriOperationTemplate,
    agriRessourceTemplate,
    biologicalResultTemplate,
    cropSpeciesTemplate,
    environmentalResultTemplate,
    soilMicrobiomeTemplate,
    soilNutrientTemplate,
    weedSpeciesTemplate,
];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
