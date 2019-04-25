import { GET_REQUESTS } from '../actions/action-types';
import { get } from '../api/api';

export const getRequests = (params) => {
    let requests = get(params);
    return {
        type: GET_REQUESTS,
        payload: requests
    }
};