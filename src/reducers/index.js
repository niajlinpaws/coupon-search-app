/* Importing Package Dependencies */
import { combineReducers } from 'redux';

/* Importing all reducers 
    to be exported from a 
    single source 
*/
import HomeReducer from './HomeReducer';

export default combineReducers({
    home: HomeReducer
});