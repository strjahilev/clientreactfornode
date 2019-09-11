import { combineReducers } from 'redux';

import add from './add';
import getbook from './get';
import edit from'./edit'

export default combineReducers({
    add,
    getbook,
    edit
})