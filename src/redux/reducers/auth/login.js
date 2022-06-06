import { LOGIN_USER_SUCCESS, LOGIN_USER_ERROR } from "../../actions/auth/login"

const initialState = {
    data : null,
    success : false,
    loading : false,
    error : null,
    message : null
}

const loginReducer = (state=initialState, action) => {
    console.log(action.type)
    switch(action.type){
        case LOGIN_USER_SUCCESS : {
            return {
                ...state,
                data : action.payload,
                success : true,
                loading : false,
                error : null
            }
        }
        case LOGIN_USER_ERROR : {
            return {
                ...state,
                data : null,
                success : false,
                loading : false,
                error : action.errors ? action.errors : 'SOMETHING WENT WRONG'
            }
        }
        default : return {...state}
    }
}

export default loginReducer