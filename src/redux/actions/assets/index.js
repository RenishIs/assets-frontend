export const GET_ASSETS = 'GET_ASSETS'
export const GET_ASSETS_SUCCESS = 'GET_ASSETS_SUCCESS'
export const GET_ASSETS_ERROR = 'GET_ASSETS_ERROR'

export const GET_SINGLE_ASSET = 'GET_SINGLE_ASSET'
export const GET_SINGLE_ASSET_SUCCESS = 'GET_SINGLE_ASSET_SUCCESS'
export const GET_SINGLE_ASSET_ERROR = 'GET_SINGLE_ASSET_ERROR'

export const ADD_ASSET = 'ADD_ASSET'
export const ADD_ASSET_SUCCESS = 'ADD_ASSET_SUCCESS'
export const ADD_ASSET_ERROR = 'ADD_ASSET_ERROR'

export const EDIT_ASSET = 'EDIT_ASSET'
export const EDIT_ASSET_SUCCESS = 'EDIT_ASSET_SUCCESS'
export const EDIT_ASSET_ERROR = 'EDIT_ASSET_ERROR'

export const DELETE_ASSET = 'DELETE_ASSET'
export const DELETE_ASSET_SUCCESS = 'DELETE_ASSET_SUCCESS'
export const DELETE_ASSET_ERROR = 'DELETE_ASSET_ERROR'

export const getAssets = () => ({
    type : GET_ASSETS
})

export const getAssetsSuccess = (payload) => ({
    type : GET_ASSETS_SUCCESS,
    payload
})

export const getAssetsError = () => ({
    type : GET_ASSETS_ERROR
})

export const getSingleAsset = (payload) => ({
    type : GET_SINGLE_ASSET,
    payload
})

export const getSingleAssetSuccess = (payload) => ({
    type : GET_SINGLE_ASSET_SUCCESS,
    payload
})

export const getSingleAssetError = (payload = '', errors = {}) => ({
    type : GET_SINGLE_ASSET_SUCCESS,
    payload,
    errors
})

export const addAsset = (payload) => ({
    type : ADD_ASSET,
    payload
})

export const addAssetSuccess = (payload) => ({
    type : ADD_ASSET_SUCCESS,
    payload
})

export const addAssetError = (payload = '', errors = {}) => ({
    type : ADD_ASSET_ERROR,
    payload,
    errors
})

export const editAsset = (payload) => ({
    type : EDIT_ASSET,
    payload
})

export const editAssetSuccess = (payload) => ({
    type : EDIT_ASSET_SUCCESS,
    payload
})

export const editAssetError = (payload = '', errors = {}) => ({
    type : EDIT_ASSET_ERROR,
    payload, 
    errors
})

export const deleteAsset = (payload) => ({
    type : DELETE_ASSET,
    payload
})

export const deleteAssetSuccess = (payload) => ({
    type : DELETE_ASSET_SUCCESS,
    payload
})

export const deleteAssetError = (payload = '', errors = {}) => ({
    type : DELETE_ASSET_ERROR,
    payload,
    errors
})