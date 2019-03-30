import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router';
import Sender from '../components/sender/sender';
import Login from '../components/login/login';

import '../styles/app.less';

class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component = {Sender}/>
                    <Route path="/login" component = {Login}/>
                </Switch>
            </Router>
        );
    }
}

export default App;