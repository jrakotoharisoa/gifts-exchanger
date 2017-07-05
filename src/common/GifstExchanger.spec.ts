
import { IParticipant } from '../model';
import { GiftsExchanger } from './GiftsExchanger';

describe('Gifts Exchanger', () => {
    const data: IParticipant[] = [
        { id: '1', name: 'Tom', type: '', group: '1' },
        { id: '2', name: 'Anna', type: '', group: '2' },
        { id: '3', name: 'Lea', type: '', group: '3' },
    ];

    describe('Constructor', () => {
        it('should init with empty relations', () => {
            // Given && when
            const exchanger = new GiftsExchanger(data, []);
            // Then
            expect(exchanger.relations).toBeDefined();
            expect(exchanger.relations.length).toEqual(0);
        });
    });

    describe('Generate', () => {
        it.only('should call getReceiversFor', () => {
            // Given
            const exchanger = new GiftsExchanger(data, []);
            const getReceiversFor = spyOn(exchanger, 'getReceiversFor');
            // When
            exchanger.run();
            // Then
            expect(getReceiversFor).toHaveBeenCalled();
        });

        it('should call fill relations property', () => {
            // Given
            const exchanger = new GiftsExchanger(data, []);
            // When
            exchanger.run();
            // Then
            expect(exchanger.relations.length).toEqual(data.length);
        });

        it('should return relations with unknow receiver if criteria always return false', () => {
            // Given
            const exchanger = new GiftsExchanger(data, [() => false]);
            // When
            exchanger.run();
            // Then
            exchanger.relations.map(({receiver}) => {
                expect(receiver).toEqual('UNKNOWN');
            });
        });
    });

    describe('getReceiversFor', () => {
        it('should call criteria', () => {
            // Given
            let criteria = jest.fn();
            const exchanger = new GiftsExchanger(data, [criteria]);
            // When
            exchanger.getReceiversFor(data[0]);
            // Then
            expect(criteria).toBeCalled();
        });

        it('should return empty domain if criteria return false', () => {
            // Given
            const criteria = jest.fn();
            criteria.mockReturnValue(false);
            const exchanger = new GiftsExchanger(data, [criteria]);
            // When
            const domain = exchanger.getReceiversFor(data[0]);
            // Then
            expect(domain.length).toEqual(0);
        });

        it('should return domain if criteria return true', () => {
            // Given
            const criteria = jest.fn();
            criteria.mockReturnValue(true);
            const exchanger = new GiftsExchanger(data, [criteria]);
            // When
            const domain = exchanger.getReceiversFor(data[0]);
            // Then
            expect(domain.length).toEqual(data.length);
        });

    });

    describe('display', () => {
        it('should call console.log as many times as data.length', () => {
            // Given
            const exchanger = new GiftsExchanger(data, []);
            exchanger.run();
            const loggerStub = spyOn(console, 'log');
            // When
            exchanger.display();

            // Then
            expect(loggerStub).toHaveBeenCalledTimes(exchanger.relations.length);
        });
    });

    describe('IsComplete', () => {
        it('should return true if participant available length equal 0', () => {
            const exchanger = new GiftsExchanger([], []);
            expect(exchanger.IsComplete()).toBeTruthy();
        });
        it('should return false if participant available length not equal 0', () => {
            const exchanger = new GiftsExchanger(data, []);
            expect(exchanger.IsComplete()).toBeFalsy();
        });

    });

    describe('getParticipantsDomain', () => {
        it('should return domain for all available participants', () => {
            const exchanger = new GiftsExchanger(data, []);
            const domains = exchanger.getParticipantsDomain();
            data.map((p) => {
                expect(domains[p.id]).toBeDefined;
                expect(domains[p.id].length).toEqual(data.length);
            });
        });
    });

    describe('getParticipantToProces', () => {
        it('should return the first participant with smallest domain', () => {
            const criteria = function (sender: IParticipant, _receiver: IParticipant) {
                if (sender.id !== '2') {
                    return true;
                }
                return false;
            };
            const exchanger = new GiftsExchanger(data, [criteria]);
            const p2p = exchanger.getParticipantToProcess();
            expect(p2p).toEqual(data[1]);
        });
    });
});
