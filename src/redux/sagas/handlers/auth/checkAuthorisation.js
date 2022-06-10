import { push } from "connected-react-router"
import { put } from "redux-saga/effects"
import { loginUserSuccess } from "../../../actions/auth/login"

function* checkAuthorization(action){
    const token = localStorage.getItem('auth_token')
    if(token){
        yield put(loginUserSuccess({}, token))
    }
    else{
        localStorage.clear()
        yield put(push('/'))
    }
}

export default checkAuthorization