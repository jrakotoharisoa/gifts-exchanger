
import { Provider } from 'react-redux';
import * as React from 'react';
import { render } from 'react-dom';
import { getStore } from './store';
import { AppComponent } from './components/app';

import '!style!css!sass!./main.scss';

const appStore = getStore();

render(
    <Provider store={appStore} >
        <AppComponent />
    </Provider>,
    document.getElementById('main')
);

