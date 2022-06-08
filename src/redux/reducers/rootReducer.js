import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import LoginReducer from './auth/login'
import registerReducer from "./auth/register";
import forgotPasswordReducer from "./auth/forgotPassword";
import ResetPassword from "../../Pages/ResetPassword";

const reducer = (history) => combineReducers({
    auth : LoginReducer,
    registerData : registerReducer,
    forgotPassword : forgotPasswordReducer,
    resetPassword : ResetPassword,
    router: connectRouter(history)
})

export default reducer