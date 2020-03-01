import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import './configuration/i18n';
import { MuiThemeProvider } from '@material-ui/core/styles/';
import mainTheme from '../src/styles/mainTheme';
import App from './App';
import rootReducer from './store/rootReducer';
import { logger } from 'redux-logger';

const store = createStore(rootReducer, applyMiddleware(logger));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <MuiThemeProvider theme={mainTheme}>
                <App />
            </MuiThemeProvider>
        </Router>
    </Provider>,
    document.getElementById('app')
);