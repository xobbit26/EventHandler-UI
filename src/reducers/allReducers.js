import { combineReducers } from 'redux';
import events from './events.reducer';
import sender from './sender.reducer';

const allReducers = combineReducers({
    events: events,
    sender: sender
});

export default allReducers;