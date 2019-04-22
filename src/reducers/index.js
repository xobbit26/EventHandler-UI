import { combineReducers } from 'redux';
import Requests from './requests';

const allReducers = combineReducers({
    requests: Requests
});

export default allReducers;