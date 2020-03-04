import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import './configuration/i18n';
import { ThemeProvider } from '@material-ui/core/styles/';
import mainTheme from '../src/styles/mainTheme';
import App from './App';
import rootReducer from './store/rootReducer';
import { logger } from 'redux-logger';
import { toastConfigInit } from './utils/notify-utils';

const store = createStore(rootReducer, applyMiddleware(logger));
toastConfigInit();

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <ThemeProvider theme={mainTheme}>
                <Suspense fallback={<div></div>}>
                    <App />
                </Suspense>
            </ThemeProvider >
        </Router>
    </Provider>,
    document.getElementById('app')
);