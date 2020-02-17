import { fromJS } from 'immutable';
import { GET_EVENTS } from '../actions';

const initialState = fromJS({
    events: []
});

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_EVENTS:
            return state.merge({ tableData: action.payload });
        default:
            return state;
    };
};

export const getEventsState = (state) => state.events.get('events');

export default eventsReducer;