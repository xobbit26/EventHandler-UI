import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Layout from './components/layout/Layout';
import { api, REQUEST_TRANSLATIONS_URL } from './api/api';
import {
    checkIsBackendAvailable,
    checkIsUserAuthenticated,
    requestTranslations
} from './store/app/actions';

class App extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let translationsUrl = `${REQUEST_TRANSLATIONS_URL}?locale=EN`;
        api.get(translationsUrl)
            .then((data) => {
                this.props.requestTranslations(data);
            }).then(() => {
                this.props.checkIsBackendAvailable();
                this.props.checkIsUserAuthenticated();
            });
    }

    render() {
        const { isBackendAvailable } = this.props;

        //TODO: add loader while server request
        return (
            <div>
                {isBackendAvailable ?
                    <React.Fragment>
                        <Layout />
                    </React.Fragment>
                    : <div>Backend is not available</div>
                }
            </div>
        );
    }
}

App.propTypes = {
    isBackendAvailable: PropTypes.bool,
}

const mapStateToProps = (state) => {
    return {
        isBackendAvailable: state.app.get('isBackendAvailable')
    }
}

const matchDispatchToProps = {
    checkIsBackendAvailable,
    checkIsUserAuthenticated,
    requestTranslations
}

export default connect(mapStateToProps, matchDispatchToProps)(App);