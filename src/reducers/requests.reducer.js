import { fromJS } from 'immutable';
import { GET_REQUESTS } from '../actions/action-types';

const initialState = fromJS({
    requests: []
});

const requests = (state = initialState, action) => {
    switch (action.type) {
        case GET_REQUESTS:
            return state.merge({ tableData: action.payload });
        default:
            return state;
    };
};

export const getRequestsState = (state) => state.requests.get('requests');

export default requests;