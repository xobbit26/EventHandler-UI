import { REQUEST_EVENTS } from '../actions';

export const requestEvents = (events) => {
    return {
        type: REQUEST_EVENTS,
        payload: events
    }
};