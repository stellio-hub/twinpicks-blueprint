import { SpeciesTemplate } from './Species';
import { ActionTemplate } from './Action';
import { StructureConfigTemplate } from './StructureConfig';

import { generateBlueprintFile } from '../../utils';

const blueprint = [SpeciesTemplate, ActionTemplate, StructureConfigTemplate];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
