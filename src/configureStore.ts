import { createStore } from 'redux';
import {rootReducer, IAppState} from './reducers';


const store = createStore<IAppState>(
    rootReducer,
    ((window as any).__REDUX_DEVTOOLS_EXTENSION__) && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export const configureStore = () => store;
