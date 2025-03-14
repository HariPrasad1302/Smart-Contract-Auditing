import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk'; 
import authReducer from './reducers/authReducer'; 

const reducer = combineReducers({
  auth: authReducer,
});

const middleware = [thunk];
const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;