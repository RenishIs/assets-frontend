export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'
export const LOGOUT_USER = 'LOGOUT_USER'
export const LOGOUT_USER_SUCCESS = 'LOGOUT_USER_SUCCESS'
export const LOGOUT_USER_ERROR = 'LOGOUT_USER_ERROR'

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

export const logoutUser = () => ({
    type : LOGOUT_USER
})

export const logoutUserSuccess = () => ({
    type : LOGOUT_USER_SUCCESS
})

export const logoutUserError = () => ({
    type : LOGOUT_USER_ERROR
})