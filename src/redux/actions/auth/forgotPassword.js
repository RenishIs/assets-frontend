export const FORGOT_PASSWORD = 'FORGOT_PASSWORD'
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS'
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR'

export const forgotPassword = (payload) => ({
    type : FORGOT_PASSWORD,
    payload
})

export const forgotPasswordSuccess = (payload={}) => ({
    type : FORGOT_PASSWORD_SUCCESS,
    payload
})

export const forgotPasswordError = (payload='', errors={}) => ({
    type : FORGOT_PASSWORD_ERROR,
    payload,
    errors
})