import { SpeciesTemplate } from './species';
import { ActionTemplate } from './action';

import { generateBlueprintFile } from '../../utils';

const blueprint = [SpeciesTemplate, ActionTemplate];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
