import { IParticipant } from './model';
import * as fs from 'fs';

const csv = require('fast-csv');

export class CSVReader {
    file: string;
    constructor(f: string) {
        this.file = f;
    }

    read(): Promise<IParticipant[]> {

        return new Promise<IParticipant[]>(
            (resolve) => {
                const readStream = fs.createReadStream(this.file);
                let results = [];
                let index = 0;

                let csvStream = csv.parse({
                    delimiter: ';',
                    ignoreEmpty: true,
                    trim: true
                })
                    .on("data", function ([name, group, type]) {
                        index++;
                        results.push({
                            id: index,
                            name: name,
                            group: group,
                            type: type
                        });

                    })
                    .on("end", function () {
                        resolve(results);
                    });

                readStream.pipe(csvStream);
            }
        );
    }
}