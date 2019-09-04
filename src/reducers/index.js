import { combineReducers } from 'redux';

import add from './add';
import get from './get';

export default combineReducers({
    add,
    get
})