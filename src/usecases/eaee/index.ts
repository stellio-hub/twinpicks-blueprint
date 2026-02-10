import { SpeciesTemplate } from './species';

import { generateBlueprintFile } from '../../utils';

const blueprint = [SpeciesTemplate];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
