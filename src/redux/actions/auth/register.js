export const REGISTER_USER = 'REGISTER_USER'
export const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
export const REGISTER_USER_ERROR = 'REGISTER_USER_ERROR'

export const registerUserStart = (payload={}) => ({
    type : REGISTER_USER,
    payload
})

export const registerUserSuccess = (payload = {}, token = '') => ({
    type : REGISTER_USER_SUCCESS,
    payload,
    token
})

export const registerUserError = (payload = '', errors = {}) => ({
    type : REGISTER_USER_ERROR,
    payload,
    errors
})
