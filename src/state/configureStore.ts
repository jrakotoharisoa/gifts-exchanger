import { createStore } from 'redux';
import {participantsReducer} from './participants';
import {IAppState} from '.';
import {combineReducers} from 'redux';
import {exchangesReducer} from './exchanges';

const rootReducer = combineReducers < IAppState > ({
    participants: participantsReducer,
    exchanges: exchangesReducer
});



const store = createStore<IAppState>(
    rootReducer,
    ((window as any).__REDUX_DEVTOOLS_EXTENSION__) && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export const configureStore = () => store;
