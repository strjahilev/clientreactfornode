import { combineReducers } from 'redux';

import add from './add';
import getbook from './get';
import edit from'./edit';
import deletebook from "./get";

export default combineReducers({
    add,
    getbook,
    edit,
    deletebook
})