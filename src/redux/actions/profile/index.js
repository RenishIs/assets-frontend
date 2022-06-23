export const GET_PROFILE = 'GET_PROFILE'
export const GET_PROFILE_SUCCESS = 'GET_PROFILE_SUCCESS'
export const GET_PROFILE_ERROR = 'GET_PROFILE_ERROR'

export const getProfile = () => ({
    type : GET_PROFILE
})

export const getProfileSuccess = (payload) => ({
    type : GET_PROFILE_SUCCESS,
    payload
})

export const getProfileError = () => ({
    type : GET_PROFILE_ERROR
})