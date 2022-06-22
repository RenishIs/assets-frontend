import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router';

import LoginReducer from './auth/login'
import registerReducer from "./auth/register";
import forgotPasswordReducer from "./auth/forgotPassword";
import resetPasswordReducer from "./auth/resetPassword";
import AssetsReducer from "./assets";

const reducer = (history) => combineReducers({
    auth : LoginReducer,
    registerData : registerReducer,
    forgotPassword : forgotPasswordReducer,
    resetPassword : resetPasswordReducer,
    assets : AssetsReducer,
    router: connectRouter(history)
})

export default reducer