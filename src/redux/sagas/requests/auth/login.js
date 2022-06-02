import {client} from '../../../../App'
import { LOGIN_USER_MUTATION } from '../../../../gql/Mutation/Auth'

export const loginUserRequest = async (data) => {
    const response = await client.mutate({
        mutation : LOGIN_USER_MUTATION,
        variables : {...data}
    })
    return response
}