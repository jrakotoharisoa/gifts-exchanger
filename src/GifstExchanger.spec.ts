import { expect } from 'chai';
import { IParticipant, Criteria } from './Model';
import { GiftsExchanger } from './GiftsExchanger';
import { spy, stub } from 'sinon';
describe('Gifts Exchanger', () => {
    var data: IParticipant[] = [
        { id: 1, name: 'Tom', type: "", group: "1" },
        { id: 2, name: 'Anna', type: "", group: "2" },
        { id: 3, name: 'Lea', type: "", group: "3" },
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
            const getReceiversFor = spy(exchanger, 'getReceiversFor');
            // When
            exchanger.run();
            // Then
            expect(getReceiversFor.called).to.be.true;
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
            exchanger.relations.map(({receiver}) => {
                expect(receiver).to.eql("UNKNOWN");
            });
        });
    });

    describe('getReceiversFor', () => {
        it('should call criteria', () => {
            // Given
            let criteria = spy();
            const exchanger = new GiftsExchanger(data, [criteria]);
            // When
            exchanger.getReceiversFor(data[0])
            // Then
            expect(criteria.called).to.be.true;
        });

        it('should return empty domain if criteria return false', () => {
            // Given
            const criteria = stub();
            criteria.returns(false);
            const exchanger = new GiftsExchanger(data, [criteria]);
            // When
            const domain = exchanger.getReceiversFor(data[0])
            // Then
            expect(domain.length).to.eql(0);
        });

        it('should return domain if criteria return true', () => {
            // Given
            const criteria = stub();
            criteria.returns(true);
            const exchanger = new GiftsExchanger(data, [criteria]);
            // When
            const domain = exchanger.getReceiversFor(data[0])
            // Then
            expect(domain.length).to.eql(data.length);
        });

    });

    describe('display', () => {
        it('should call console.log as many times as data.length', () => {
            // Given
            const exchanger = new GiftsExchanger(data, []);
            exchanger.run();
            const loggerStub = spy(console, 'log');
            // When
            exchanger.display();

            // Then
            expect(loggerStub.callCount).to.eql(exchanger.relations.length);
        });
    });

    describe('IsComplete', () => {
        it('should return true if participant available length equal 0', () => {
            const exchanger = new GiftsExchanger([], []);
            expect(exchanger.IsComplete()).to.be.true;
        });
        it('should return false if participant available length not equal 0', () => {
            const exchanger = new GiftsExchanger(data, []);
            expect(exchanger.IsComplete()).to.be.false;
        });

    });

    describe('getParticipantsDomain', () => {
        it('should return domain for all available participants', () => {
            const exchanger = new GiftsExchanger(data, []);
            const domains = exchanger.getParticipantsDomain();
            data.map((p) => {
                expect(domains[p.id]).to.exist;
                expect(domains[p.id]).to.eql(data);
            });
        })
    });

    describe('getParticipantToProces', () => {
        it('should return the first participant with smallest domain', () => {
            const criteria = function (sender: IParticipant, receiver: IParticipant) {
                if (sender.id !== 2) {
                    return true;
                }
                return false;
            };
            debugger
            const exchanger = new GiftsExchanger(data, [criteria]);
            const p2p = exchanger.getParticipantToProces();
            expect(p2p).to.eql(data[1]);
        });
    });


});