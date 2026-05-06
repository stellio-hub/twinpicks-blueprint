import { StellioTemplate } from '../interfaces';
import { config } from '../config';

const fse = require('fs-extra');

const moveBlueprintFile = (from: any, to: any) => {
    fse.move(from, to, { overwrite: true }, (err: any) => {
        if (err) return console.error(err);
        console.log('Blueprint moved to: ', to);
    });
};

const generateBlueprintFile = (blueprint: StellioTemplate[], usecasePathName?: string) => {
    if (!usecasePathName) {
        return console.log('Error: usecase path name undefined');
    }

    const from = `./${config.blueprintFileName}`;
    const to = `../../../src/${usecasePathName}/${config.blueprintFileName}`;

    fse.writeFile(config.blueprintFileName, JSON.stringify(blueprint, null, 4), function (err: any) {
        if (err) throw err;
        console.log('Blueprint Saved');
        moveBlueprintFile(from, to);
    });
};

export { generateBlueprintFile };
