import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as React from 'react';
import { render } from 'react-dom';
import { reducers } from './reducers';

const store = createStore(reducers);

render(
    <div>Hello !</div>,
    document.getElementById('main')
);

