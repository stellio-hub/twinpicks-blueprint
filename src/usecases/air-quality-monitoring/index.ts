import { BuildingTemplate } from './building';
import { RoomTemplate } from './room';
import { AirQualityObservedTemplate } from './airQualityObserved';
import { WeeklyScheduleTemplate } from './weeklySchedule';

import { generateBlueprintFile } from '../../utils';

const blueprint = [BuildingTemplate, RoomTemplate, AirQualityObservedTemplate, WeeklyScheduleTemplate];

const usecasePathName = __dirname.split(/dist[\\/]/)[1];

generateBlueprintFile(blueprint, usecasePathName);
