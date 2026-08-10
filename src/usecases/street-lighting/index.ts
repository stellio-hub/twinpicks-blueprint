import { StreetlightTemplate } from './streetLight';
import { StreetlightControlCabinetTemplate } from './streetlightControlCabinet';
import { StreetlightGroupTemplate } from './streetlightGroup';
import { DeliveryPointTemplate } from './deliveryPoint';

import { generateBlueprintFile } from '../../utils';

const blueprint = [
    StreetlightTemplate,
    StreetlightControlCabinetTemplate,
    StreetlightGroupTemplate,
    DeliveryPointTemplate,
];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
