import { combineReducers } from 'redux';
import Requests from './requests.reducer';
import Sender from './sender.reducer';

const allReducers = combineReducers({
    requests: Requests,
    sender: Sender
});

export default allReducers;