import { expect } from 'chai';
import { IParticipant, Criteria } from './Model';
import { GiftsExchanger } from './GiftsExchanger';
import { spy, stub } from 'sinon';
describe('Gifts Exchanger', () => {
    var data: IParticipant[] = [
        { id: 1, name: 'Tom', type: "", group: "" },
        { id: 2, name: 'Anna', type: "", group: "" },
        { id: 3, name: 'Lea', type: "", group: "" },
    ];


    describe('Constructor', () => {
        it('should init with empty relations', () => {
            // Given && when
            const exchanger = new GiftsExchanger(data, []);
            // Then
            expect(exchanger.relations).to.exist;
            expect(exchanger.relations.length).to.eql(0);
        });
    });

    describe('Generate', () => {
        it('should call getDomain', () => {
            // Given
            const exchanger = new GiftsExchanger(data, []);
            const getDomain = spy(exchanger, 'getDomain');
            // When
            exchanger.run();
            // Then
            expect(getDomain.called).to.be.true;
        });

        it('should call fill relations property', () => {
            // Given
            const exchanger = new GiftsExchanger(data, []);
            // When
            exchanger.run();
            // Then
            expect(exchanger.relations.length).to.eql(data.length);
        });

        it('should return relations with unknow receiver if criteria always return false', () => {
            // Given
            const exchanger = new GiftsExchanger(data, [(s, r) => false]);
            // When
            exchanger.run();
            // Then
            exchanger.relations.map((rel) => {
                expect(rel.receiver).to.eql("UNKNOWN");
            });
        });
    });

    describe('GetDomain', () => {
        it('should call criteria', () => {
            // Given
            let criteria = spy();
            const exchanger = new GiftsExchanger(data, [criteria]);
            // When
            exchanger.getDomain(data[0])
            // Then
            expect(criteria.called).to.be.true;
        });

        it('should return empty domain if criteria return false', () => {
            // Given
            const criteria = stub();
            criteria.returns(false);
            const exchanger = new GiftsExchanger(data, [criteria]);
            // When
            const domain = exchanger.getDomain(data[0])
            // Then
            expect(domain.length).to.eql(0);
        });

        it('should return domain if criteria return true', () => {
            // Given
            const criteria = stub();
            criteria.returns(true);
            const exchanger = new GiftsExchanger(data, [criteria]);
            // When
            const domain = exchanger.getDomain(data[0])
            // Then
            expect(domain.length).to.eql(data.length);
        });

    });

    describe('display', () => {
        it('should call console.log as many times as data.length', () => {
            // Given
            const loggerStub = spy(console, 'log');
            const exchanger = new GiftsExchanger(data, []);
            exchanger.run();

            // When
            exchanger.display();

            // Then
            expect(loggerStub.callCount).to.eql(exchanger.relations.length);


        });
    });

});