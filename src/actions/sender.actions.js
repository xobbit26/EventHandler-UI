import { CREATE_REQUEST } from './action-types';
import { CREATE_REQUEST_URL, post } from '../api/api';

export const sendRequest = (params) => {
    let success = post(CREATE_REQUEST_URL, params);
    return {
        type: CREATE_REQUEST,
        payload: success
    }
};