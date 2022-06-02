export const LOGIN_USER = 'LOGIN_USER'
export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS'
export const LOGIN_USER_ERROR = 'LOGIN_USER_ERROR'

export const loginUserStart = (data) => ({
    type : LOGIN_USER,
    payload : data
})

export const loginUserSuccess = (data) => ({
    type : LOGIN_USER_SUCCESS,
    payload : data
})

export const loginUserError = (err) => ({
    type : LOGIN_USER_ERROR,
    payload : err
})