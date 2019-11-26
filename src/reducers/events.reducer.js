import { fromJS } from 'immutable';
import { GET_EVENTS } from '../actions/action-types';

const initialState = fromJS({
    events: []
});

const events = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS:
            return state.merge({ tableData: action.payload });
        default:
            return state;
    };
};

export const getEventsState = (state) => state.events.get('events');

export default events;