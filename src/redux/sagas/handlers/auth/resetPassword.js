import { call, put } from "redux-saga/effects";
import { resetPasswordError, resetPasswordSuccess } from "../../../actions/auth/resetPassword";
import resetPasswordRequest from "../../requests/auth/resetPassword";
import openNotificationWithIcon from '../../../../Helper/Notification';

function* handlerResetPassword({payload}){
    try{
        const { data } = yield call(resetPasswordRequest, payload)
        yield put(resetPasswordSuccess(data))
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(resetPasswordError(err.message, err.data || {}))
    }
}

export default handlerResetPassword