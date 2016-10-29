import { expect } from 'chai';
import { participantsReducer, IParticipantsState } from './participants';
import {
    createActionAddParticipant,
    createActionEditParticipant,
    createActionRemoveParticipant
} from '../actions';
import { IParticipant } from '../model';
describe('Participants Reducer', () => {

    it('should init with an empty empyt participant', () => {
        const state = participantsReducer(undefined, undefined);
        expect(Object.keys(state).length).to.eql(1);
    });
    describe('| Action - Add participant', () => {
        it('should add participant to state for participant id', () => {
            // Given
            // When
            const state = participantsReducer(undefined, createActionAddParticipant());
            // Then
            expect(Object.keys(state).length).to.eql(2);
        });
    });

    describe('| Action - Edit participant', () => {
        it('should do nothing if no participant id match', () => {
            // Given
            const initial: IParticipantsState = {
                ['0']: {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'type'
                }
            };
            // When
            const actual = participantsReducer(
                Object.freeze(initial),
                createActionEditParticipant('1', 'name', 'NewName'));
            // Then
            expect(actual).to.eql(initial);
        });

        it('should edit participant name field', () => {
            // Given
            const initial: IParticipantsState = {
                ['0']: {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'type'
                }
            };
            const expected: IParticipantsState = {
                ['0']: {
                    id: '0',
                    name: 'NewName',
                    group: 'group',
                    type: 'type'
                }
            };
            // When

            const actual = participantsReducer(
                Object.freeze(initial),
                createActionEditParticipant('0', 'name', 'NewName'));
            // Then
            expect(actual).to.eql(expected);
        });

        it('should edit participant group field', () => {
            // Given
            const initial: IParticipantsState = {
                ['0']: {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'type'
                }
            };
            const expected: IParticipantsState = {
                ['0']: {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'NewGroup',
                    type: 'type'
                }
            };
            // When
            const actual = participantsReducer(
                Object.freeze(initial),
                createActionEditParticipant('0', 'group', 'NewGroup'));
            // Then
            expect(actual).to.eql(expected);
        });

        it('should edit participant type field', () => {
            // Given
            const initial: IParticipantsState = {
                ['0']: {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'type'
                }
            };
            const expected: IParticipantsState = {
                ['0']: {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'NewType'
                }
            };
            // When
            const actual = participantsReducer(
                Object.freeze(initial),
                createActionEditParticipant('0', 'type', 'NewType'));
            // Then
            expect(actual).to.eql(expected);
        });
    });

    describe('| Action - Remove participant', () => {
        it('should do nothing if participant id no mathc', () => {
            // Given
            const initial: IParticipantsState = {
                ['0']: {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'type'
                }
            };
            // When
            const actual = participantsReducer(Object.freeze(initial), createActionRemoveParticipant(1));
            // Then
            expect(actual).to.eql(initial);
        });
        it('should do nothing if participant id no mathc', () => {
            // Given
            const initial: IParticipantsState = {
                ['0']: {
                    id: '0',
                    name: 'ParticipantName',
                    group: 'group',
                    type: 'type'
                }
            };
            const expected = {};
            // When
            const actual = participantsReducer(Object.freeze(initial), createActionRemoveParticipant(0));
            // Then
            expect(actual).to.eql(expected);
        });
    });
});
