import { call, put } from 'redux-saga/effects'
import { registerUserError, registerUserSuccess } from '../../../actions/auth/register'
import { registerUserRequest } from '../../requests/auth/register'

export function* handlerRegisterUser(action){
    try{
        const { data } = yield call(registerUserRequest, action.payload)
        const token = data?.registerUser?.token
        // yield localStorage.setItem('auth_token', token);
        yield put(registerUserSuccess(data, token))
    }
    catch(err){
        yield put(registerUserError(err.message, err.data || {}))
    }
}