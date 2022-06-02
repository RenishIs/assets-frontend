import { call, put } from 'redux-saga/effects'
import { registerUserError, registerUserSuccess } from '../../../actions/auth/register'
import { registerUserRequest } from '../../requests/auth/register'

export function* handlerRegisterUser(action){
    try{
        const res = yield call(registerUserRequest, action.payload)
        yield put(registerUserSuccess(res))
    }
    catch(err){
        yield put(registerUserError(err))
    }
}