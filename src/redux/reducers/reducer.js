import { combineReducers } from "redux";
import LoginReducer from './auth/login'
import registerReducer from "./auth/register";

const reducer = combineReducers({
    loginData : LoginReducer,
    registerData : registerReducer
})

export default reducer