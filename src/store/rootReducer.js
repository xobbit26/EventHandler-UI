import { combineReducers } from 'redux';
import appReducer from './app/reducers';
import eventsReducer from './events/reducers';
import senderReducer from './sender/reducers';

export default combineReducers({
    app: appReducer,
    events: eventsReducer,
    sender: senderReducer
});