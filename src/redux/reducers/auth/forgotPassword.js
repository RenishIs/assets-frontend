import { FORGOT_PASSWORD, FORGOT_PASSWORD_ERROR, FORGOT_PASSWORD_SUCCESS } from "../../actions/auth/forgotPassword"

const initialState = {
    loading : false,
    data : null,
    success : false,
    errors : null,
    message : null
}

const forgotPasswordReducer = ( state=initialState, action ) => {
    switch(action.type){
        case FORGOT_PASSWORD : {
            return {
                ...state,
                loading : true,
                data : null,
                success : false,
                errors : null,
                message : null
            }
        }
        case FORGOT_PASSWORD_SUCCESS : {
            return {
                ...state,
                loading : false,
                data : action.payload,
                success : true,
                errors : null,
                message : null
            }
        }
        case FORGOT_PASSWORD_ERROR : {
            return {
                ...state,
                loading : false,
                data : null,
                success : false,
                errors : action.errors ? action.errors : 'SOMETHING WENT WRONG',
                message : action.payload
            }
        }
        default : return {...state}
    }
}

export default forgotPasswordReducer