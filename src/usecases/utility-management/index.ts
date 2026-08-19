import { InVoiceTemplate } from './inVoice';
import { DeliveryPointTemplate } from './deliveryPoint';

import { generateBlueprintFile } from '../../utils';

const blueprint = [InVoiceTemplate, DeliveryPointTemplate];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);