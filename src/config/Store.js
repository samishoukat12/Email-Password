import{createStore,applyMiddleware} from 'redux';
import {RootReducer} from '../store/RootReducer';
import thunk from 'redux-thunk';
export const Store = createStore(RootReducer, applyMiddleware(thunk));
