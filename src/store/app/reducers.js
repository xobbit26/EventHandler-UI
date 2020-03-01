import {
    CHECK_IS_BACKEND_AVAILABLE,
    CHECK_IS_USER_AUTHENTICATED
} from '../actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    isBackendAvailable: false,
    isUserAuthenticated: false,
    translations: []
});

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHECK_IS_BACKEND_AVAILABLE:
            return state.merge({ isBackendAvailable: action.payload });
        case CHECK_IS_USER_AUTHENTICATED:
            return state.merge({ isUserAuthenticated: action.payload });
        default:
            return state;
    }
}

export default appReducer;