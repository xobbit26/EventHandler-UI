import { CREATE_EVENT } from '../actions/action-types';
import { fromJS } from 'immutable';

const initialState = fromJS({
    fio: '',
    department: '',
    description: ''
});

const sender = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_EVENT:
            return state.merge({ fio: action.payload.fio });
        default:
            return state;
    }
};

export const getFioState = (state) => state.sender.get('fio');
export const getDepartmentState = (state) => state.sender.get('department');
export const getDescriptionState = (state) => state.sender.get('description');

export default sender;