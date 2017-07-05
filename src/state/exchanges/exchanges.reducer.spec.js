"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('Exchanges Reducer', function () {
    it('should init with an empty array', function () {
        var state = _1.exchangesReducer(undefined, undefined);
        expect(state).toEqual([]);
    });
    describe('| Action - Generate', function () {
        it('should regenerate as many exchange as participants', function () {
            // Given
            var initial = [];
            var participants = [
                {
                    id: '0',
                    name: 'ParticipantName0',
                    group: 'group1',
                    type: 'type'
                },
                {
                    id: '1',
                    name: 'ParticipantName1',
                    group: 'group2',
                    type: 'type'
                }
            ];
            // When
            var actual = _1.exchangesReducer(initial, _1.createActionGenerateExchange(participants));
            // Then
            expect(actual.length).toEqual(2);
        });
    });
});
//# sourceMappingURL=exchanges.reducer.spec.js.map