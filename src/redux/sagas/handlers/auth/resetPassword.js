


import { call, put } from 'redux-saga/effects'
import requestResetPassword from '../../requests/auth/resetPassword'

export function* handlerResetPassword({ payload }){
    try{
        const { data } = yield call(requestResetPassword, payload)
    }
    catch(err){
    }
}
