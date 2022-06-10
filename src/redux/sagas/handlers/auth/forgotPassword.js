import { call, put } from "redux-saga/effects";
import { forgotPasswordError, forgotPasswordSuccess } from "../../../actions/auth/forgotPassword";
import forgotPasswordRequest from "../../requests/auth/forgotPassword";
import openNotificationWithIcon from '../../../../Helper/Notification';

function* handlerForgotPassword({payload}){
    try{
        const { data } = yield call(forgotPasswordRequest, payload)
        yield put(forgotPasswordSuccess(data))
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(forgotPasswordError(err.message, err.data || {}))
    }
}

export default handlerForgotPassword