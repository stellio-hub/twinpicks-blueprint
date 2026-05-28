import { FieldTemplate } from './field';
import { IrrigationAreaTemplate } from './irrigationArea';
import { ManagedZoneTemplate } from './managedZone';
import { ReferenceSoilAreaTemplate } from './referenceSoilArea';
import { WeatherInformationTemplate } from './weatherInformation';
import { RecurringRuleTemplate } from './recurringRule';

import { generateBlueprintFile } from '../../utils';

const blueprint = [
    FieldTemplate,
    IrrigationAreaTemplate,
    ReferenceSoilAreaTemplate,
    ManagedZoneTemplate,
    WeatherInformationTemplate,
    RecurringRuleTemplate,
];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
