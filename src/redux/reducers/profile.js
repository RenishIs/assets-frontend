import {GET_PROFILE_ERROR, GET_PROFILE_SUCCESS } from "../actions/profile"

const initialState = {
    loading : false,
    success : false,
    data : null,
    error : null,
    message : null,
    profile : null
}

const profileReducer = (state=initialState, action) => {
    console.log(action.type)
    switch(action.type){
        case GET_PROFILE_SUCCESS : {
            return {
                ...state,
                loading : false,
                data : action.payload,
                success : true,
                error : null
            }
        }
        case GET_PROFILE_ERROR : {
            return {
                ...state,
                loading : false,
                success : false,
                data : null,
                error : action.errors ? action.errors : 'SOMETHING WENT WRONG',
                message : action.payload,
            }
        }
        default : return {...state}
    }
}

export default profileReducer