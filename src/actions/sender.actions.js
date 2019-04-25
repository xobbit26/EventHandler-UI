import { SEND_REQUEST } from './action-types';

export const sendRequest = (params) => {
    return {
        type: SEND_REQUEST,
        payload: params
    }
};