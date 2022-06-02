import { takeLatest } from 'redux-saga/effects'
import { LOGIN_USER } from '../actions/auth/login'
import { REGISTER_USER } from '../actions/auth/register'
import { handlerLoginUser } from './handlers/auth/login'
import { handlerRegisterUser } from './handlers/auth/register'

export function* watcherSaga(){
    yield takeLatest(LOGIN_USER, handlerLoginUser )
    yield takeLatest(REGISTER_USER, handlerRegisterUser)
}