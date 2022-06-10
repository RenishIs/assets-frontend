import {client} from '../../../../App'
import { RESET_PASSWORD_LINK } from '../../../../gql/Mutation/Auth'

const forgotPasswordRequest = async (data) => {
    const response = await client.mutate({
        mutation : RESET_PASSWORD_LINK,
        variables : {...data}
    })
    return response
}

export default forgotPasswordRequest