import {
    CHECK_IS_BACKEND_AVAILABLE,
    CHECK_IS_USER_AUTHENTICATED
} from '../actions';

export const checkIsBackendAvailable = () => {
    //immitation of server request
    //TODO: in future add server request
    // setTimeout(() => {
    //     const i = 5;
    // }, 2000);

    return {
        type: CHECK_IS_BACKEND_AVAILABLE,
        payload: true
    }
}

export const checkIsUserAuthenticated = () => {
    //immitation of server request
    //TODO: in future add server request
    // setTimeout(() => {
    //     const i = 5;
    // }, 2500);

    return {
        type: CHECK_IS_USER_AUTHENTICATED,
        payload: true
    }
}