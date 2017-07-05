import { exchangesReducer, IExchangesState } from './exchanges';
import { IParticipant } from '../model';
import { createActionGenerateExchange } from '../actions';

describe('Exchanges Reducer', () => {
    it('should init with an empty array', () => {
        const state = exchangesReducer(undefined, undefined);
        expect(state).toEqual([]);
    });

    describe('| Action - Generate', () => {
        it('should regenerate as many exchange as participants', () => {
            // Given
            const initial: IExchangesState = [];
            const participants: IParticipant[] = [
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
            const actual = exchangesReducer(initial, createActionGenerateExchange(participants));

            // Then
            expect(actual.length).toEqual(2);
        });
    });
});
