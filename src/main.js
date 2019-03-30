import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router'; 

import Sender from '../src/components/sender/sender';
import Login from '../src/components/login/login';
import Administration from '../src/components/administration/administration';

ReactDOM.render(
	<HashRouter>
		<Switch>
            <Route exact path="/" component = {Sender}/>
            <Route path="/login" component = {Login}/>
			<Route path="/administration" component = {Administration}/>
        </Switch>
    </HashRouter>,
	document.getElementById('app')
);