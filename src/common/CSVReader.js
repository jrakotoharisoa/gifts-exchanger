"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var csv = require('fast-csv');
var CSVReader = (function () {
    function CSVReader(f) {
        this.file = f;
    }
    CSVReader.prototype.read = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var readStream = fs.createReadStream(_this.file);
            var results = [];
            var index = 0;
            var csvStream = csv.parse({
                delimiter: ';',
                ignoreEmpty: true,
                trim: true
            })
                .on('data', function (_a) {
                var name = _a[0], group = _a[1], type = _a[2];
                index++;
                results.push({
                    id: index,
                    name: name,
                    group: group,
                    type: type
                });
            })
                .on('end', function () {
                resolve(results);
            });
            readStream.pipe(csvStream);
        });
    };
    return CSVReader;
}());
exports.CSVReader = CSVReader;
//# sourceMappingURL=CSVReader.js.map