import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import registrationReducer from '../reducers/registrationReducer';
import loginReducer from '../reducers/loginReducer';

const rootReducer = combineReducers({
  registration: registrationReducer,
  login: loginReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
