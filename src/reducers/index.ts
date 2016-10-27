import { combineReducers } from 'redux';
import { participantsReducer } from './participants.reducer';

export const reducers = combineReducers({
    participants: participantsReducer
});
