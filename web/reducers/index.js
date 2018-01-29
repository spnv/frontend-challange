"use strict"
import {
    combineReducers
} from 'redux';
import {
    memberReducers
} from './memberReducer';

export default combineReducers({
    member: memberReducers
})