import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles/';
import mainTheme from '../src/styles/mainTheme';
import App from './app/App';
import rootReducer from './store/rootReducer';

const store = createStore(rootReducer);

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