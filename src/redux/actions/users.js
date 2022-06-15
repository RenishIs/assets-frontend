export const GET_USERS = 'GET_USERS'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_ERROR = 'GET_USERS_ERROR'

export const ADD_USER = 'ADD_USER'
export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS'
export const ADD_USER_ERROR = 'ADD_USER_ERROR'

export const EDIT_USER = 'EDIT_USER'
export const EDIT_USER_SUCCESS = 'EDIT_USER_SUCCESS'
export const EDIT_USER_ERROR = 'EDIT_USER_ERROR'

export const DELETE_USER = 'DELETE_USER'
export const DELETE_USER_SUCCESS = 'DELETE_USER_SUCCESS'
export const DELETE_USER_ERROR = 'DELETE_USER_ERROR'

export const getUsers = () => ({
    type : GET_USERS
})

export const getUsersSuccess = (payload) => ({
    type : GET_USERS_SUCCESS,
    payload
})

export const getUsersError = () => ({
    type : GET_USERS_ERROR
})

export const addUser = (payload) => ({
    type : ADD_USER,
    payload
})

export const addUserSuccess = () => ({
    type : ADD_USER_SUCCESS
})

export const addUserError = () => ({
    type : ADD_USER_ERROR
})

export const editUser = () => ({
    type : EDIT_USER
})

export const editUserSuccess = () => ({
    type : EDIT_USER_SUCCESS
})

export const editUserError = () => ({
    type : EDIT_USER_ERROR
})

export const deleteUser = () => ({
    type : DELETE_USER
})

export const deleteUserSuccess = () => ({
    type : DELETE_USER_SUCCESS
})

export const deleteUserError = () => ({
    type : DELETE_USER_ERROR
})