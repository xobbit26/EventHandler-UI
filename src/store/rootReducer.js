import { combineReducers } from 'redux';
import appReducer from './app/reducers';
import appMenuReducer from './appMenu/reducers';
import eventsReducer from './events/reducers';
import senderReducer from './sender/reducers';

export default combineReducers({
    app: appReducer,
    appMenu: appMenuReducer,
    events: eventsReducer,
    sender: senderReducer
});