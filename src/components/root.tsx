import * as React from 'react';
import { AppComponent } from './app';
import { Provider } from 'react-redux';
export const RootComponent = ({store}) => (
    <Provider store={store}>
        <AppComponent />
    </Provider>
);
