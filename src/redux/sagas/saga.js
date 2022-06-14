import { takeLatest } from 'redux-saga/effects'
import { FORGOT_PASSWORD } from '../actions/auth/forgotPassword'

import { LOGIN_USER, LOGOUT_USER } from '../actions/auth/login'
import { REGISTER_USER } from '../actions/auth/register'
import { RESET_PASSWORD } from '../actions/auth/resetPassword'

import { handlerLoginUser } from './handlers/auth/login'
import { handlerRegisterUser } from './handlers/auth/register'
import handlerResetPassword from './handlers/auth/resetPassword'
import handlerForgotPassword from './handlers/auth/forgotPassword'
import { handlerLogoutUser } from './handlers/auth/login'

export function* watcherSaga(){
    yield takeLatest(LOGIN_USER, handlerLoginUser )
    yield takeLatest(REGISTER_USER, handlerRegisterUser)
    yield takeLatest(FORGOT_PASSWORD, handlerForgotPassword)
    yield takeLatest(RESET_PASSWORD, handlerResetPassword)
    yield takeLatest(LOGOUT_USER, handlerLogoutUser)    
}