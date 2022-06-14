import { call, put } from "redux-saga/effects";
import { loginUserError, loginUserSuccess, logoutUserSuccess } from "../../../actions/auth/login";
import { loginUserRequest } from "../../requests/auth/login";

export function* handlerLoginUser(action){
    try{
        const { data } = yield call(loginUserRequest, action.payload)
        const token = data?.loginUser?.token
        yield localStorage.setItem('auth_token', token);
        yield put(loginUserSuccess(data, token))
    }
    catch(err){
        yield put(loginUserError(err.message, err.data || {}))
    }
}

export function* handlerLogoutUser(action){
    try{
        yield localStorage.clear('auth_token')
        yield put(logoutUserSuccess())
    }
    catch(err){
        
    }
}