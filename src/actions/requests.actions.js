import { GET_REQUESTS } from '../actions/action-types';
import { GET_REQUESTS_URL, get } from '../api/api';

export const getRequests = (params) => {
    let requests = get(GET_REQUESTS_URL, params);
    return {
        type: GET_REQUESTS,
        payload: requests
    }
};