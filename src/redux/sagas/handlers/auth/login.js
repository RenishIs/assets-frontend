import { call, put } from "redux-saga/effects";
import { loginUserError, loginUserSuccess } from "../../../actions/auth/login";
import { loginUserRequest } from "../../requests/auth/login";

export function* handlerLoginUser(action){
    try{
        const { data } = yield call(loginUserRequest, action.payload)
        const token = data?.loginUser?.token
        yield localStorage.setItem('auth_token', token);
        yield put(loginUserSuccess(data))
    }
    catch(err){
        alert('Error')
        yield put(loginUserError(err))
    }
}