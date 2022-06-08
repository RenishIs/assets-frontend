export const RESET_PASSWORD = 'RESET_PASSWORD'
export const RESET_PASSWORD_SUCCESS = 'RESET_PASSWORD_SUCCESS'
export const RESET_PASSWORD_ERROR = 'RESET_PASSWORD_ERROR'

export const resetPassword = (payload) => ({
    type : RESET_PASSWORD,
    payload
})

export const resetPasswordSuccess = (payload={}) => ({
    type : RESET_PASSWORD_SUCCESS,
    payload
})

export const resetPasswordError = (payload='', errors) => ({
    type : RESET_PASSWORD_ERROR,
    payload,
    errors
})