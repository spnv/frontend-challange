"use strict"
import {
    combineReducers
} from 'redux';
import {
    memberReducers
} from './memberReducer';
/* TODO : Template Active - import reducer */
// HERE IMPORT REDUCERS TO BE COMBINED
// import {
//   booksReducers
// } from './booksReducers';
// import {
//   cartReducers
// } from './cartReducers';

/* TODO : Template Active - assign reducer */
//HERE COMBINE THE REDUCERS
export default combineReducers({
    member: memberReducers
})