import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import App from './App';

import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers/index';

const middleware = applyMiddleware(thunk, logger);
const initialState = window.INITIAL_STATE;
const store = createStore(reducers, initialState, middleware);

const appElement = document.getElementById('app');

if (module.hot) {
    module.hot.accept('./App', () => {
        const NextApp = require('./App').default;
        render(<NextApp />, appElement);
    });
}

const Routes = (
    <Provider store={store}>
      <App />
    </Provider>
  )

render(Routes, appElement);
