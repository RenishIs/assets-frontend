export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

export const loginUserStart = (payload={}) => ({
    type : LOGIN_USER,
    payload
})

export const loginUserSuccess = (payload = {}, token = '') => ({
    type : LOGIN_USER_SUCCESS,
    payload,
    token
})

export const loginUserError = (payload = '', errors = {}) => ({
    type : LOGIN_USER_ERROR,
    payload,
    errors
})