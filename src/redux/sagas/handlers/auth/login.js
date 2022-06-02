import { call, put } from "redux-saga/effects";
import { loginUserError, loginUserSuccess } from "../../../actions/auth/login";
import { loginUserRequest } from "../../requests/auth/login";

export function* handlerLoginUser(action){
    try{
        const res = yield call(loginUserRequest, action.payload)
        yield put(loginUserSuccess(res))
    }
    catch(err){
        yield put(loginUserError(err))
    }
}