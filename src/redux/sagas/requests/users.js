import { client } from "../../../App";
import { CREATE_USER_MUTATION, DELETE_USER_MUTATION, UPDATE_USER_MUTATION } from "../../../gql/Mutation/User";
import { GET_USERS_QUERY, GET_USER_BY_ID_QUERY } from "../../../gql/Query/User";

export const getUsersRequest = async () => {
    const res = await client.query({
        query : GET_USERS_QUERY
    })
    return res
}

export const getSingleUserRequest = async (id) => {
    const res = await client.query({
        query : GET_USER_BY_ID_QUERY,
        variables : { userId: id }
    })
    return res
}

export const editUserRequest = async (payload) => {
    const res = await client.mutate({
        mutation : UPDATE_USER_MUTATION,
        variables : {...payload}
    })
    return res
}

export const addUserRequest = async (payload) => {
    const res = await client.mutate({
        mutation : CREATE_USER_MUTATION,
        variables : {...payload}
    })
    return res
}

export const deleteUserRequest = async (id) => {
    const res = await client.mutate({
        mutation : DELETE_USER_MUTATION,
        variables : { deleteUserId: id }
    })
    return res
}