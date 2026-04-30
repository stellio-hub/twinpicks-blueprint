import { RiverTemplate } from './river';
import { RiverBasinTemplate } from './riverBasin';

import { generateBlueprintFile } from '../../utils';

const blueprint = [RiverTemplate, RiverBasinTemplate];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
