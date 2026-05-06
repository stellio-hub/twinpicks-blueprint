import { generateBlueprintFile } from '../../utils';

import { RiverTemplate } from './river';
import { RiverBasinTemplate } from './riverBasin';
import { CombinedSewerTemplate } from './combinedSewer';
import { WaterTreatmentPlantTemplate } from './waterTreatmentPlant';
import { StormTankTemplate } from './stormTank';
import { ControlPointTemplate } from './controlPoint';
import { SamplingPointTemplate } from './samplingPoint';

const blueprint = [
    RiverTemplate,
    RiverBasinTemplate,
    CombinedSewerTemplate,
    WaterTreatmentPlantTemplate,
    StormTankTemplate,
    ControlPointTemplate,
    SamplingPointTemplate,
];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
