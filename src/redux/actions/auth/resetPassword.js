export const RESET_PASSWORD = 'RESET_PASSWORD'
export const FORGOT_PASSWORD = 'FORGOT_PASSWORD'

export const resetPassword = (payload) => ({
    type : RESET_PASSWORD,
    payload
})

export const forgotPassword = () => ({
    type : RESET_PASSWORD
})

