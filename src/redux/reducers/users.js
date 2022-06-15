import { GET_USERS_ERROR, GET_USERS_SUCCESS } from "../actions/users"

const initialState = {
    loading : false,
    success : false,
    data : null,
    error : null,
}

const usersReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_USERS_SUCCESS : {
            return {
                ...state,
                loading : false,
                data : action.payload,
                success : true,
                error : null
            }
        }
        case GET_USERS_ERROR : {
            return {
                ...state,
                loading : false,
                data : null,
                success : false,
                error : action.payload ? action.payload : 'Something went wrong'
            }
        }
        default : return {...state}
    }
}

export default usersReducer