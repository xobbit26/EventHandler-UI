import {
    OPEN_SIDE_BAR,
    CLOSE_SIDE_BAR
} from '../actions';
import { fromJS } from 'immutable';

const initialState = fromJS({
    isOpenSideBar: false
});

const appMenuReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_SIDE_BAR:
            return state.merge({ isOpenSideBar: true });
        case CLOSE_SIDE_BAR:
            return state.merge({ isOpenSideBar: false });
        default:
            return state;
    }
}

export default appMenuReducer;