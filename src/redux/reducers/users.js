import { GET_SINGLE_USER_ERROR, GET_SINGLE_USER_SUCCESS, GET_USERS_ERROR, GET_USERS_SUCCESS } from "../actions/users"

const initialState = {
    loading : false,
    success : false,
    data : null,
    error : null,
    message : null,
    user : null
}

const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_USERS_SUCCESS : {
            return {
                ...state,
                loading : false,
                data : action.payload,
                success : true,
                error : null,
                user : null
            }
        }
        case GET_USERS_ERROR : {
            return {
                ...state,
                loading : false,
                success : false,
                data : null,
                error : action.errors ? action.errors : 'SOMETHING WENT WRONG',
                message : action.payload,
            }
        }
        case GET_SINGLE_USER_SUCCESS : {
            return {
                ...state,
                loading : false,
                success : true,
                data : null,
                error : null,
                user : action.payload
            }
        }
        case GET_SINGLE_USER_ERROR : {
            return {
                ...state,
                loading : false,
                success : false,
                error : action.errors ? action.errors : 'SOMETHING WENT WRONG',
                message : action.payload,
                user : null
            }
        }
        default : return {...state}
    }
}

export default usersReducer