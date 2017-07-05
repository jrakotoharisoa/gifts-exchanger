"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GiftsExchanger_1 = require("./GiftsExchanger");
describe('Gifts Exchanger', function () {
    var data = [
        { id: '1', name: 'Tom', type: '', group: '1' },
        { id: '2', name: 'Anna', type: '', group: '2' },
        { id: '3', name: 'Lea', type: '', group: '3' },
    ];
    describe('Constructor', function () {
        it('should init with empty relations', function () {
            // Given && when
            var exchanger = new GiftsExchanger_1.GiftsExchanger(data, []);
            // Then
            expect(exchanger.relations).toBeDefined();
            expect(exchanger.relations.length).toEqual(0);
        });
    });
    describe('Generate', function () {
        it.only('should call getReceiversFor', function () {
            // Given
            var exchanger = new GiftsExchanger_1.GiftsExchanger(data, []);
            var getReceiversFor = spyOn(exchanger, 'getReceiversFor');
            // When
            exchanger.run();
            // Then
            expect(getReceiversFor).toHaveBeenCalled();
        });
        it('should call fill relations property', function () {
            // Given
            var exchanger = new GiftsExchanger_1.GiftsExchanger(data, []);
            // When
            exchanger.run();
            // Then
            expect(exchanger.relations.length).toEqual(data.length);
        });
        it('should return relations with unknow receiver if criteria always return false', function () {
            // Given
            var exchanger = new GiftsExchanger_1.GiftsExchanger(data, [function () { return false; }]);
            // When
            exchanger.run();
            // Then
            exchanger.relations.map(function (_a) {
                var receiver = _a.receiver;
                expect(receiver).toEqual('UNKNOWN');
            });
        });
    });
    describe('getReceiversFor', function () {
        it('should call criteria', function () {
            // Given
            var criteria = jest.fn();
            var exchanger = new GiftsExchanger_1.GiftsExchanger(data, [criteria]);
            // When
            exchanger.getReceiversFor(data[0]);
            // Then
            expect(criteria).toBeCalled();
        });
        it('should return empty domain if criteria return false', function () {
            // Given
            var criteria = jest.fn();
            criteria.mockReturnValue(false);
            var exchanger = new GiftsExchanger_1.GiftsExchanger(data, [criteria]);
            // When
            var domain = exchanger.getReceiversFor(data[0]);
            // Then
            expect(domain.length).toEqual(0);
        });
        it('should return domain if criteria return true', function () {
            // Given
            var criteria = jest.fn();
            criteria.mockReturnValue(true);
            var exchanger = new GiftsExchanger_1.GiftsExchanger(data, [criteria]);
            // When
            var domain = exchanger.getReceiversFor(data[0]);
            // Then
            expect(domain.length).toEqual(data.length);
        });
    });
    describe('display', function () {
        it('should call console.log as many times as data.length', function () {
            // Given
            var exchanger = new GiftsExchanger_1.GiftsExchanger(data, []);
            exchanger.run();
            var loggerStub = spyOn(console, 'log');
            // When
            exchanger.display();
            // Then
            expect(loggerStub).toHaveBeenCalledTimes(exchanger.relations.length);
        });
    });
    describe('IsComplete', function () {
        it('should return true if participant available length equal 0', function () {
            var exchanger = new GiftsExchanger_1.GiftsExchanger([], []);
            expect(exchanger.IsComplete()).toBeTruthy();
        });
        it('should return false if participant available length not equal 0', function () {
            var exchanger = new GiftsExchanger_1.GiftsExchanger(data, []);
            expect(exchanger.IsComplete()).toBeFalsy();
        });
    });
    describe('getParticipantsDomain', function () {
        it('should return domain for all available participants', function () {
            var exchanger = new GiftsExchanger_1.GiftsExchanger(data, []);
            var domains = exchanger.getParticipantsDomain();
            data.map(function (p) {
                expect(domains[p.id]).toBeDefined;
                expect(domains[p.id].length).toEqual(data.length);
            });
        });
    });
    describe('getParticipantToProces', function () {
        it('should return the first participant with smallest domain', function () {
            var criteria = function (sender, _receiver) {
                if (sender.id !== '2') {
                    return true;
                }
                return false;
            };
            var exchanger = new GiftsExchanger_1.GiftsExchanger(data, [criteria]);
            var p2p = exchanger.getParticipantToProcess();
            expect(p2p).toEqual(data[1]);
        });
    });
});
//# sourceMappingURL=GifstExchanger.spec.js.map