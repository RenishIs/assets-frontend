import { REGISTER_USER_ERROR, REGISTER_USER_SUCCESS } from "../../actions/auth/register"

const initialState = {
    loading : false,
    data : null,
    success : false,
    error : null,
    message : null
}

const registerReducer = ( state=initialState, action ) => {
    switch(action.type){
        case REGISTER_USER_SUCCESS : {
            return {
                ...state,
                loading : false,
                data : action.payload,
                success : true,
                error : null
            }
        }
        case REGISTER_USER_ERROR : {
            return {
                ...state,
                loading : false,
                data : null,
                success : true,
                message : action.payload,
                error : action.errors ? action.errors : 'SOMETHING WENT WRONG'
            }
        }
        default : return {...state}
    }
}

export default registerReducer