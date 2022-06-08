import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import LoginReducer from './auth/login'
import registerReducer from "./auth/register";

const reducer = (history) => combineReducers({
    auth : LoginReducer,
    registerData : registerReducer,
    router: connectRouter(history)
})

export default reducer