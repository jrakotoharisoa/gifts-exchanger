import { combineReducers } from 'redux';
import { participantsReducer } from './participants';

export const reducers = combineReducers({
    participants: participantsReducer
});
