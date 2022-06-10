import { RESET_PASSWORD, RESET_PASSWORD_ERROR, RESET_PASSWORD_SUCCESS } from "../../actions/auth/resetPassword"

const initialState = {
    loading : false,
    data : null,
    success : false,
    errors : null,
    message : null
}

const resetPasswordReducer = (state=initialState, action) => {
    switch(action.type){
        case RESET_PASSWORD : {
            return {
                ...state,
                loading : true,
                data : null,
                success : false,
                errors : null,
                message : null
            }
        }
        case RESET_PASSWORD_SUCCESS : {
            return {
                ...state,
                loading : false,
                data : action.payload,
                success : true,
                errors : null,
                message : null
            }
        }
        case RESET_PASSWORD_ERROR : {
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

export default resetPasswordReducer