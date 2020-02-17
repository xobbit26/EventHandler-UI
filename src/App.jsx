import React, { Component } from 'react';
import Layout from './components/layout/Layout';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthentificated: false,
            isBackendAvailable: true,
        };

        this.checkForAuthentification = this.checkForAuthentification.bind(this);
        this.checkBackendAvailability = this.checkBackendAvailability.bind(this);
    }

    componentDidMount() {
        this.checkForAuthentification();
        this.checkBackendAvailability();
    }

    checkForAuthentification() {
        //immitation of server request
        //TODO: in future add server request
        setTimeout(() => {
            this.setState({ isAuthentificated: true });
        }, 2000);
    }

    checkBackendAvailability() {
        //immitation of server request
        //TODO: in future add server request
        setTimeout(() => {
            this.setState({ isBackendAvailable: true });
        }, 3000);
    }

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