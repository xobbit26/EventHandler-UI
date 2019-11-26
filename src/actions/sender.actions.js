import { CREATE_EVENT } from './action-types';
import { CREATE_EVENT_URL, post } from '../api/api';

export const sendEvent = (params) => {
    let success = post(CREATE_EVENT_URL, params);
    return {
        type: CREATE_EVENT,
        payload: success
    }
};