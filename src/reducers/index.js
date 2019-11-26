import { combineReducers } from 'redux';
import Events from './events.reducer';
import Sender from './sender.reducer';

const allReducers = combineReducers({
    events: Events,
    sender: Sender
});

export default allReducers;