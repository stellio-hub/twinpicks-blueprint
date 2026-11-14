import { RebillingContractTemplate } from './rebillingContract';
import { MeteringPointTemplate } from './meteringPoint';
import { OrganizationTemplate } from './organization';
import { PersonTemplate } from './person';

import { generateBlueprintFile } from '../../utils';

const blueprint = [RebillingContractTemplate, MeteringPointTemplate, OrganizationTemplate, PersonTemplate];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
