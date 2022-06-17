import { call, put } from "redux-saga/effects";
import { resetPasswordError, resetPasswordSuccess } from "../../../actions/auth/resetPassword";
import resetPasswordRequest from "../../requests/auth/resetPassword";
import openNotificationWithIcon from '../../../../Helper/Notification';
import { push } from "connected-react-router";

function* handlerResetPassword({payload}){
    try{
        const { data } = yield call(resetPasswordRequest, payload)
        openNotificationWithIcon('success', 'Password Reset Successful!!')
        yield put(resetPasswordSuccess(data))
        yield put(push('/login'))
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(resetPasswordError(err.message, err.data || {}))
    }
}

export default handlerResetPassword