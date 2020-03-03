import { CREATE_EVENT_URL, api } from './api';

export const postEvent = (data) => {
    return api.post(CREATE_EVENT_URL, data);
}