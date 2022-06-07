import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import { history } from "../../Routing/history";
import LoginReducer from './auth/login'
import registerReducer from "./auth/register";

const reducer = combineReducers({
    auth : LoginReducer,
    registerData : registerReducer,
    router: connectRouter(history)
})

export default reducer