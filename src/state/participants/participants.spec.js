"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('Participants Reducer', function () {
    it('should init with an empty empyt participant', function () {
        var state = _1.participantsReducer(undefined, undefined);
        expect(Object.keys(state).length).toEqual(1);
    });
    describe('| Action - Add participant', function () {
        it('should add participant to state for participant id', function () {
            // Given
            // When
            var state = _1.participantsReducer(undefined, _1.createActionAddParticipant());
            // Then
            expect(Object.keys(state).length).toEqual(2);
        });
    });
    describe('| Action - Edit participant', function () {
        it('should do nothing if no participant id match', function () {
            // Given
            var initial = (_a = {},
                _a['0'] = {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'type'
                },
                _a);
            // When
            var actual = _1.participantsReducer(Object.freeze(initial), _1.createActionEditParticipant('1', 'name', 'NewName'));
            // Then
            expect(actual).toEqual(initial);
            var _a;
        });
        it('should edit participant name field', function () {
            // Given
            var initial = (_a = {},
                _a['0'] = {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'type'
                },
                _a);
            var expected = (_b = {},
                _b['0'] = {
                    id: '0',
                    name: 'NewName',
                    group: 'group',
                    type: 'type'
                },
                _b);
            // When
            var actual = _1.participantsReducer(Object.freeze(initial), _1.createActionEditParticipant('0', 'name', 'NewName'));
            // Then
            expect(actual).toEqual(expected);
            var _a, _b;
        });
        it('should edit participant group field', function () {
            // Given
            var initial = (_a = {},
                _a['0'] = {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'type'
                },
                _a);
            var expected = (_b = {},
                _b['0'] = {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'NewGroup',
                    type: 'type'
                },
                _b);
            // When
            var actual = _1.participantsReducer(Object.freeze(initial), _1.createActionEditParticipant('0', 'group', 'NewGroup'));
            // Then
            expect(actual).toEqual(expected);
            var _a, _b;
        });
        it('should edit participant type field', function () {
            // Given
            var initial = (_a = {},
                _a['0'] = {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'type'
                },
                _a);
            var expected = (_b = {},
                _b['0'] = {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'NewType'
                },
                _b);
            // When
            var actual = _1.participantsReducer(Object.freeze(initial), _1.createActionEditParticipant('0', 'type', 'NewType'));
            // Then
            expect(actual).toEqual(expected);
            var _a, _b;
        });
    });
    describe('| Action - Remove participant', function () {
        it('should do nothing if participant id no mathc', function () {
            // Given
            var initial = (_a = {},
                _a['0'] = {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'type'
                },
                _a);
            // When
            var actual = _1.participantsReducer(Object.freeze(initial), _1.createActionRemoveParticipant('1'));
            // Then
            expect(actual).toEqual(initial);
            var _a;
        });
        it('should do nothing if participant id no mathc', function () {
            // Given
            var initial = (_a = {},
                _a['0'] = {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'type'
                },
                _a);
            var expected = {};
            // When
            var actual = _1.participantsReducer(Object.freeze(initial), _1.createActionRemoveParticipant('0'));
            // Then
            expect(actual).toEqual(expected);
            var _a;
        });
    });
});
//# sourceMappingURL=participants.spec.js.map