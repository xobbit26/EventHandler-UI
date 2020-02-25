import { fromJS } from 'immutable';
import { REQUEST_EVENTS } from '../actions';

const initialState = fromJS({
    eventsGridData: {
        data: [],
        columns: [],
        isGridEmpty: true,
        totalItems: 0
    }
});

const eventsReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_EVENTS:
            return state.merge({ eventsGridData: fromJS(action.payload) });
        default:
            return state;
    };
};

export default eventsReducer;