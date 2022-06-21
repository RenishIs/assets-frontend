import { call, put } from "redux-saga/effects";
import { getProfile, getProfileSuccess } from "../../actions/profile";
import { getProfileRequest } from "../requests/profile";

export function* handlerGetProfile(){
    try{
        const { data } = yield call(getProfileRequest)
        yield put(getProfileSuccess(data))
    }
    catch(err){

    }
}
