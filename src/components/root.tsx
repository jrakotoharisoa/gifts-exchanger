import * as React from 'react';
import { AppComponent } from './app';
import {Provider, Store} from 'react-redux';
import {IAppState} from '../reducers/index';

interface IRootProps {
    store: Store<IAppState>;
}

export const RootComponent = ({store}: IRootProps) => (
    <Provider store={store}>
        <AppComponent />
    </Provider>
);
