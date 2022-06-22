import { push } from "connected-react-router";
import { call, put } from "redux-saga/effects";
import openNotificationWithIcon from "../../../Helper/Notification";
import { addUserError, addUserSuccess, deleteUserError, deleteUserSuccess, editUserError, editUserSuccess, getSingleUserError, getSingleUserSuccess, getUsers, getUsersSuccess } from "../../actions/users";
import { addUserRequest, deleteUserRequest, editUserRequest, getUsersRequest } from "../requests/users";
import { getSingleUserRequest } from "../requests/users";

export function* handlerGetUsers(){
    try{
        const { data } = yield call(getUsersRequest)
        yield put(getUsersSuccess(data?.Users))
    }
    catch(err){

    }
}

export function* handlerGetSingleUser({payload}){
    try{
        const { data } = yield call(getSingleUserRequest, payload)
        yield put(getSingleUserSuccess(data?.User))
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(getSingleUserError(err.message, err.data || {}))
    }
}

export function* handlerEditUser({payload}){
    try{
        const data = yield call(editUserRequest, payload)
        yield put(editUserSuccess(data))
        openNotificationWithIcon('success', 'USER EDITED SUCCESSFULLY')
        yield put(push('/users'))
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(editUserError(err.message, err.data || {}))
    }
}

export function* handlerAddUser({payload}){
    try{
        const data = yield call(addUserRequest, payload)
        yield put(addUserSuccess(data))
        openNotificationWithIcon('success', 'USER ADDED SUCCESSFULLY')
        yield put(push('/users'))
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(addUserError(err.message, err.data || {}))
    }
}

export function* handlerDeleteUser({payload}){
    try{
        const data = yield call(deleteUserRequest, payload)
        yield put(deleteUserSuccess(data))
        openNotificationWithIcon('success', 'USER DELETED')
        yield call(getUsers())
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(deleteUserError(err.message, err.data || {}))
    }
}