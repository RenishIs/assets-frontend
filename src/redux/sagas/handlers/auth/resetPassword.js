


import { call, put } from 'redux-saga/effects'
import requestResetPassword from '../../requests/auth/resetPassword'

export function* handlerResetPassword({ payload }){
    console.log(payload,"HANDLER RESET PASSWORD") 
    try{
        const { data } = yield call(requestResetPassword, payload)
        alert('SUCCESS')
    }
    catch(err){
        alert('Error')
    }
}
