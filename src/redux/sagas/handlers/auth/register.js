import { call, put } from 'redux-saga/effects'
import { registerUserError, registerUserSuccess } from '../../../actions/auth/register'
import { registerUserRequest } from '../../requests/auth/register'
import { history } from '../../../../Routing/history'
export function* handlerRegisterUser(action){
    try{
        const { data } = yield call(registerUserRequest, action.payload)
        const token = data?.registerUser?.token
        yield put(registerUserSuccess(data, token))
        history.push('/login'); 
    }
    catch(err){
        history.push('/login'); 
        yield put(registerUserError(err.message, err.data || {}))
    }
}