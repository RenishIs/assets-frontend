import { client } from "../../../App";
import { DELETE_USER_MUTATION, UPDATE_USER_MUTATION } from "../../../gql/Mutation/User";
import { GET_USERS_QUERY, GET_USER_BY_ID_QUERY } from "../../../gql/Query/User";

const data = {data : [
    {
        id : 1,
        key: '1',
        username: 'John Brown',
        email : 'john@gmail.com',
        contactNo : '8978675645',
        role : 'admin',
    },
    {
        id : 2,
        key: '2',
        username: 'Jim Green',
        email : 'john@gmail.com',
        contactNo : '8978675645',
        role : 'admin',
    },
    {
        id : 3,
        key: '3',
        username: 'Joe Black',
        email : 'john@gmail.com',
        contactNo : '8978675645',
        role : 'admin',
    },
]};

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

export const addUserRequest = (payload) => {
    return data
}

export const deleteUserRequest = async (id) => {
    const res = await client.mutate({
        mutation : DELETE_USER_MUTATION,
        variables : { deleteUserId: id }
    })
    return res
}