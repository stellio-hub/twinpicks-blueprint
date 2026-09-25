import { AgriCampaignTemplate } from './agriCampaign';
import { AgriCropTemplate } from './agriCrop';
import { AgriItineraryTemplate } from './agriItinerary';
import { AgriOperationTemplate } from './agriOperation';
import { AgriParcelTemplate } from './agriParcel';
import { AgriParcelAreaTemplate } from './agriParcelArea';
import { AgriResourceTemplate } from './agriResource';
import { AgriSampleTemplate } from './agriSample';
import { AgronomicPracticesTemplate } from './agronomicPractices';
import { AgriWeedTemplate } from './agriWeed';
import { BiologicalResultTemplate } from './biologicalResult';
import { CaseStudyTemplate } from './caseStudy';
import { CropSpeciesTemplate } from './cropSpecies';
import { EnvironmentalResultTemplate } from './environmentalResult';
import { SocialEconomicTemplate } from './socialEconomic';
import { SoilMicrobiomeTemplate } from './soilMicrobiome';
import { SoilNutrientTemplate } from './soilNutrient'
import { ReferenceSoilAreaTemplate } from './referenceSoilArea';
import { ToolRequirementsTemplate } from './toolRequirements';
import { WeatherInformationTemplate } from './weatherInformation';
import { WeedSpeciesTemplate } from './weedSpecies';



import { generateBlueprintFile } from '../../utils';

const blueprint = [
    AgriCropTemplate,
    AgriCampaignTemplate,
    AgriItineraryTemplate,
    AgriParcelAreaTemplate,
    AgriParcelTemplate,
    AgriOperationTemplate,
    AgriResourceTemplate,
    AgriSampleTemplate,
    AgriWeedTemplate,
    AgronomicPracticesTemplate,
    BiologicalResultTemplate,
    CaseStudyTemplate,
    CropSpeciesTemplate,
    EnvironmentalResultTemplate,
    SocialEconomicTemplate,
    SoilMicrobiomeTemplate,
    SoilNutrientTemplate,
    ReferenceSoilAreaTemplate,
    ToolRequirementsTemplate,
    WeatherInformationTemplate,
    WeedSpeciesTemplate,
];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
