import { IParticipant } from './model';
import * as fs from 'fs';
import * as Q from 'q';

const csv = require('fast-csv');

export class Reader<IParticipant>{
    file: string;
    constructor(f: string) {
        this.file = f;
    }

    read(): Q.IPromise<IParticipant[]> {
        const deferred = Q.defer<IParticipant[]>();

        const readStream = fs.createReadStream(this.file);
        let results = [];
        let index = 0;

        let csvStream = csv.parse({
            delimiter: ';',
            ignoreEmpty: true,
            trim: true
        })
            .on("data", function (record) {
                index++;
                results.push({
                    id: index,
                    name: record[0],
                    group: record[1],
                    type: record[2]
                });

            })
            .on("end", function () {
                deferred.resolve(results);
            });

        readStream.pipe(csvStream);
        return deferred.promise;
    }
}