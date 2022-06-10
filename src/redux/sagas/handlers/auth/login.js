import { call, put } from "redux-saga/effects";
import { push } from "connected-react-router";
import { loginUserError, loginUserSuccess } from "../../../actions/auth/login";
import { loginUserRequest } from "../../requests/auth/login";
import openNotificationWithIcon from "../../../../Helper/Notification";

export function* handlerLoginUser(action){
    try{
        const { data } = yield call(loginUserRequest, action.payload)
        const token = data?.loginUser?.token
        yield localStorage.setItem('auth_token', token);
        yield put(loginUserSuccess(data, token))
        yield put(push('/profile'))
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(loginUserError(err.message, err.data || {}))
    }
}