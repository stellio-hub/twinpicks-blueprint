import { SiteTemplate } from './site';
import { BuildingTemplate } from './building';
import { UsageTemplate } from './usage';
import { DeliveryPointTemplate } from './deliveryPoint';
import { InvoiceTemplate } from './invoice';

import { generateBlueprintFile } from '../../utils';

const blueprint = [SiteTemplate, BuildingTemplate, UsageTemplate, DeliveryPointTemplate, InvoiceTemplate];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
