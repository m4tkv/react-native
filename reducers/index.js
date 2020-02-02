import { combineReducers } from 'redux';
import usersReducer from './users';
import loginReducer from './login';
import imagesReducer from './images';


export default combineReducers({
    usersReducer,
    loginReducer,
    imagesReducer
})