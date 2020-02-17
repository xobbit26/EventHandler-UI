import { combineReducers } from 'redux';
import eventsReducer from './events/reducers';
import senderReducer from './sender/reducers';

export default combineReducers({
    events: eventsReducer,
    sender: senderReducer
});