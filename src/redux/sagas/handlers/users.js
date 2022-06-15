import { call, put } from "redux-saga/effects";
import { getUsersSuccess } from "../../actions/users";
import getUsersRequest from "../requests/users";

export function* handlerGetUsers(action){
    try{
        const { data } = yield call(getUsersRequest)
        yield put(getUsersSuccess(data))
    }
    catch(err){

    }
}