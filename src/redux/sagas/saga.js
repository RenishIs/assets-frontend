import { takeLatest } from 'redux-saga/effects'
import { FORGOT_PASSWORD } from '../actions/auth/forgotPassword'

import { LOGIN_USER } from '../actions/auth/login'
import { REGISTER_USER } from '../actions/auth/register'
import handlerForgotPassword from './handlers/auth/forgotPassword'

import { handlerLoginUser } from './handlers/auth/login'
import { handlerRegisterUser } from './handlers/auth/register'

export function* watcherSaga(){
    yield takeLatest(LOGIN_USER, handlerLoginUser )
    yield takeLatest(REGISTER_USER, handlerRegisterUser)
    yield takeLatest(FORGOT_PASSWORD, handlerForgotPassword)
}