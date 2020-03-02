import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import PropTypes from 'prop-types';

import Layout from './pages/layout/Layout';
import { api } from './api/api';
import {
    checkIsBackendAvailable,
    checkIsUserAuthenticated
} from './store/app/actions';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkIsBackendAvailable());
        dispatch(checkIsUserAuthenticated());
    }, []);

    const { isBackendAvailable } = useSelector(state => ({
        isBackendAvailable: state.app.get('isBackendAvailable'),
    }));

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

App.propTypes = {
    isBackendAvailable: PropTypes.bool,
}

export default App;