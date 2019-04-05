import React, { Component } from 'react';
import Layout from '../components//Layout/layout';

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
                        <Layout isAuthentificated={isAuthentificated} />
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