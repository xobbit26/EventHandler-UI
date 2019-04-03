import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import Sender from '../components/sender/sender';
import Login from '../components/login/login';
import Administration from '../components/administration/administration';

import '../styles/app.less';

class App extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Sender} />
                <Route path="/login" component={Login} />
                <Route path="/administration" component={Administration} />
            </Switch>
        );
    }
}

export default App;