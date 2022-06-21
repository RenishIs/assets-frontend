import { call, put } from "redux-saga/effects";
import { forgotPasswordError, forgotPasswordSuccess } from "../../../actions/auth/forgotPassword";
import forgotPasswordRequest from "../../requests/auth/forgotPassword";
import openNotificationWithIcon from '../../../../Helper/Notification';
import { push } from "connected-react-router";

function* handlerForgotPassword({payload}){
    try{
        const { data } = yield call(forgotPasswordRequest, payload)
        openNotificationWithIcon('success', 'Please check your mail, Reset Link is sent successfully!!' || data?.sendResetPasswordLink?.message )
        yield put(forgotPasswordSuccess(data))
        yield put(push('/login'))
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(forgotPasswordError(err.message, err.data || {}))
    }
}

export default handlerForgotPassword