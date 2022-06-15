import { call, put } from "redux-saga/effects";
import openNotificationWithIcon from "../../../Helper/Notification";
import { getSingleUserError, getSingleUserSuccess, getUsersSuccess } from "../../actions/users";
import { getUsersRequest } from "../requests/users";
import { getSingleUserRequest } from "../requests/users";

export function* handlerGetUsers(){
    try{
        const { data } = yield call(getUsersRequest)
        yield put(getUsersSuccess(data))
    }
    catch(err){

    }
}

export function* handlerGetSingleUser({payload}){
    try{
        const { data } = yield call(getSingleUserRequest, payload)
        yield put(getSingleUserSuccess(data))
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(getSingleUserError(err.message, err.data || {}))
    }
}