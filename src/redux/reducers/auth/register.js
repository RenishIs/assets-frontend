import { REGISTER_USER_ERROR, REGISTER_USER_SUCCESS } from "../../actions/auth/register"

const initialState = {
    loading : false,
    data : null,
    success : false,
    error : null
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
                error : action.payload ? action.payload : 'SOMETHING WENT WRONG'
            }
        }
        default : return {...state}
    }
}

export default registerReducer