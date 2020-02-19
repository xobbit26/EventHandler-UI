import { fromJS, List } from 'immutable';
import { REQUEST_EVENTS } from '../actions';

const initialState = fromJS({
    events: []
});

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_EVENTS:
            return state.merge({ events: new List(action.payload) });
        default:
            return state;
    };
};

export default eventsReducer;