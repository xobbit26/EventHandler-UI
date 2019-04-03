import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import { Switch, Route } from 'react-router-dom';

import Sender from '../components/sender/sender';
import Login from '../components/login/login';
import Administration from '../components/administration/administration';
import Header from '../components/Header/header';
import NotFound_404 from '../components/404NotFound/404notFound';

import '../styles/app.less';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isAuthentificated: false,
            isBackendAvailable: true,
        };

        //this.checkForAuthentification();
        //this.checkBackendAvailability();
    }

    //TODO: Find out whats wrong with it
    // checkForAuthentification() {
    //     this.setState({ isAuthentificated: true });
    // }

    //TODO: Find out whats wrong with it
    //checkBackendAvailability(){this.setState({ isBackendAvailable: true });}


    render() {

        const { isAuthentificated, isBackendAvailable } = this.state;

        return (
            <React.Fragment>
                {isBackendAvailable &&
                    <React.Fragment>
                        <Header isAuthentificated={isAuthentificated} />
                        <Switch>
                            <Route exact path="/" component={Sender} />
                            <Route path="/login" component={Login} />

                            {isAuthentificated &&
                                <Route path="/administration" component={Administration} />
                            }
                            <Route path="*" component={NotFound_404} />
                        </Switch>
                    </React.Fragment>
                }
                {!isBackendAvailable &&
                    <React.Fragment>
                        Backend is not available
                    </React.Fragment>
                }
            </React.Fragment>
        );
    }
}

export default App;