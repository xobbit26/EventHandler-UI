import { GET_EVENTS } from './action-types';
import { GET_EVENTS_URL, get } from '../../../api/api';

export const getEvents = (params) => {
    let events = get(GET_EVENTS_URL, params);
    return {
        type: GET_EVENTS,
        payload: events
    }
};