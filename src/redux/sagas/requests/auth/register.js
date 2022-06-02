import {client} from '../../../../App'
import { CREATE_USER_MUTATION } from '../../../../gql/Mutation/Auth'

export const registerUserRequest = async (data) => {
    const res = await client.mutate({
        mutation : CREATE_USER_MUTATION,
        variables : {...data}
    })
    return res
}