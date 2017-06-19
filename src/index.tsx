
import * as React from 'react';
import { render } from 'react-dom';
import { configureStore } from './configureStore';
import { RootComponent } from './components/root';

import './main.scss';

const appStore = configureStore();

render(
    <RootComponent store={appStore} />,
    document.getElementById('main')
);

