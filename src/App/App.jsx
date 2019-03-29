import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router';

import '../styles/app.less'

class App extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component = {Header}/>
                </Switch>
            </Router>
        );
    }
}

export default App;