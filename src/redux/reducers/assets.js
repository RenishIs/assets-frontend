import { ADD_ASSET_ERROR, ADD_ASSET_SUCCESS, DELETE_ASSET_ERROR, DELETE_ASSET_SUCCESS, EDIT_ASSET_ERROR, EDIT_ASSET_SUCCESS, GET_SINGLE_ASSET_ERROR, GET_SINGLE_ASSET_SUCCESS, GET_ASSETS_ERROR, GET_ASSETS_SUCCESS } from "../actions/assets"

const initialState = {
    loading : false,
    success : false,
    data : null,
    error : null,
    message : null,
    asset : null,
    editedAsset : null
}

const AssetsReducer = (state=initialState, action) => {
    switch(action.type){
        case GET_ASSETS_SUCCESS : {
            return {
                ...state,
                loading : false,
                data : action.payload,
                success : true,
                error : null,
                asset : null
            }
        }
        case GET_ASSETS_ERROR : {
            return {
                ...state,
                loading : false,
                success : false,
                data : null,
                error : action.errors ? action.errors : 'SOMETHING WENT WRONG',
                message : action.payload,
            }
        }
        case GET_SINGLE_ASSET_SUCCESS : {
            return {
                ...state,
                loading : false,
                success : true,
                data : null,
                error : null,
                asset : action.payload
            }
        }
        case GET_SINGLE_ASSET_ERROR : {
            return {
                ...state,
                loading : false,
                success : false,
                error : action.errors ? action.errors : 'SOMETHING WENT WRONG',
                message : action.payload,
                asset : null
            }
        }
        case EDIT_ASSET_SUCCESS : {
            return {
                ...state,
                loading : false,
                success : true,
                data : null,
                error : null,
                editedAsset : action.payload
            }
        }
        case EDIT_ASSET_ERROR : {
            return {
                ...state,
                loading : false,
                success : false,
                error : action.errors ? action.errors : 'SOMETHING WENT WRONG',
                message : action.payload,
                editedAsset : null
            }
        }
        case ADD_ASSET_SUCCESS : {
            return {
                ...state,
                loading : false,
                success : true,
                data : null,
                error : null,
                editedAsset : action.payload
            }
        }
        case ADD_ASSET_ERROR : {
            return {
                ...state,
                loading : false,
                success : false,
                error : action.errors ? action.errors : 'SOMETHING WENT WRONG',
                message : action.payload,
                editedAsset : null
            }
        }
        case DELETE_ASSET_SUCCESS : {
            return {
                ...state,
                loading : false,
                success : true,
                error : null,
            }
        }
        case DELETE_ASSET_ERROR : {
            return {
                ...state,
                loading : false,
                success : false,
                error : action.errors ? action.errors : 'SOMETHING WENT WRONG',
                message : action.payload,
            }
        }
        default : return {...state}
    }
}

export default AssetsReducer