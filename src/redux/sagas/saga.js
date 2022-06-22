import { takeEvery } from 'redux-saga/effects'
import { FORGOT_PASSWORD } from '../actions/auth/forgotPassword'

import { LOGIN_USER, LOGOUT_USER } from '../actions/auth/login'
import { REGISTER_USER } from '../actions/auth/register'
import { RESET_PASSWORD } from '../actions/auth/resetPassword'
import { ADD_USER, DELETE_USER, EDIT_USER, GET_SINGLE_USER, GET_USERS } from '../actions/users'
import { CHECK_AUTHORISATION } from '../actions/auth/checkAuthorisation'

import { handlerLoginUser } from './handlers/auth/login'
import { handlerRegisterUser } from './handlers/auth/register'
import handlerResetPassword from './handlers/auth/resetPassword'
import handlerForgotPassword from './handlers/auth/forgotPassword'
import checkAuthorization from './handlers/auth/checkAuthorisation'
import { handlerLogoutUser } from './handlers/auth/login'
import { handlerAddUser, handlerDeleteUser, handlerEditUser, handlerGetSingleUser, handlerGetUsers } from './handlers/users'

export function* watcherSaga(){
    yield takeEvery(LOGIN_USER, handlerLoginUser )
    yield takeEvery(REGISTER_USER, handlerRegisterUser)
    yield takeEvery(FORGOT_PASSWORD, handlerForgotPassword)
    yield takeEvery(RESET_PASSWORD, handlerResetPassword)
    yield takeEvery(CHECK_AUTHORISATION, checkAuthorization )
    yield takeEvery(LOGOUT_USER, handlerLogoutUser)
    yield takeEvery(GET_USERS, handlerGetUsers)
    yield takeEvery(GET_SINGLE_USER, handlerGetSingleUser)
    yield takeEvery(EDIT_USER, handlerEditUser)
    yield takeEvery(ADD_USER, handlerAddUser)
    yield takeEvery(DELETE_USER, handlerDeleteUser)
}