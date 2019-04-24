import { SEND_REQUEST } from './action-types';

export const sendRequest = (params) => {
    params.fio = 'stas'
    return {
        type: SEND_REQUEST,
        payload: params
    }
};