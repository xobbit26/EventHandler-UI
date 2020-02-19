import { CREATE_EVENT } from '../actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    isEventCreated: false
});

const senderReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EVENT:
            return state.merge({ isEventCreated: true });
        default:
            return state;
    }
};

export default senderReducer;