import { combineReducers } from 'redux';
import { participantsReducer, IParticipantsState } from './participants';
import { exchangesReducer, IExchangesState } from './exchanges';

export * from './participants';
export * from './exchanges';

export interface IAppState {
    participants: IParticipantsState;
    exchanges: IExchangesState;
}

export const rootReducer = combineReducers<IAppState>({
    participants: participantsReducer,
    exchanges: exchangesReducer
});
