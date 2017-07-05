import { CSVReader } from './CSVReader';
describe('CSVReader', () => {

    it('(Constructor) should set property file', () => {
        const csvReader = new CSVReader('toto');
        expect(csvReader.file).toEqual('toto');
    });

    it('should read file', (done) => {
        const csvReader = new CSVReader('guests.sample.csv');
        csvReader.read()
            .then((data) => {
                expect(data).toBeDefined;
                done();
            });
    });
});
