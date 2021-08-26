import {combineReducers} from 'redux';
import AuthReducer from './reducer/AuthReducer';
export  const RootReducer = combineReducers(
    {
    AuthReducer
    }
    );