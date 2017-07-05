"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CSVReader_1 = require("./CSVReader");
describe('CSVReader', function () {
    it('(Constructor) should set property file', function () {
        var csvReader = new CSVReader_1.CSVReader('toto');
        expect(csvReader.file).toEqual('toto');
    });
    it('should read file', function (done) {
        var csvReader = new CSVReader_1.CSVReader('guests.sample.csv');
        csvReader.read()
            .then(function (data) {
            expect(data).toBeDefined;
            done();
        });
    });
});
//# sourceMappingURL=CSVReader.spec.js.map