import { call, put } from 'redux-saga/effects'
import { registerUserError, registerUserSuccess } from '../../../actions/auth/register'
import { registerUserRequest } from '../../requests/auth/register'
import { push } from 'connected-react-router';
import openNotificationWithIcon from '../../../../Helper/Notification';

export function* handlerRegisterUser(action){
    try{
        const { data } = yield call(registerUserRequest, action.payload)
        const token = data?.registerUser?.token
        yield put(registerUserSuccess(data, token))
        yield put(push('/login'));     
    }
    catch(err){
        openNotificationWithIcon('error', err.message)
        yield put(registerUserError(err.message, err.data || {}))
    }
}