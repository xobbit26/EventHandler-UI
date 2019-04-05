import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import { MuiThemeProvider } from '@material-ui/core/styles/';
import mainTheme from '../src/styles/mainTheme';

import App from '../src/App/App';

ReactDOM.render(
    <Router>
        <MuiThemeProvider theme={mainTheme}>
            <App />
        </MuiThemeProvider>
    </Router>,
    document.getElementById('app')
);