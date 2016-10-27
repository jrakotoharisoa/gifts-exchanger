import { CSVReader } from './CSVReader';
import { expect } from 'chai';
import { spy } from 'sinon';
describe('CSVReader', () => {

    it('(Constructor) should set property file', () => {
        const csvReader = new CSVReader('toto');
        expect(csvReader.file).to.be.eql('toto');
    });

    it('should read file', (done) => {
        const csvReader = new CSVReader('guests.sample.csv');
        let promise = csvReader.read()
            .then((data) => {
                expect(data).to.exist;
                done();
            });
    });
});
