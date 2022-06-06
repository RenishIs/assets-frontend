import {client} from '../../../../App'
import { RESET_PASSWORD_MUTATION } from '../../../../gql/Mutation/Auth'

const requestResetPassword = async (data) => {
    const response = await client.mutate({
        mutation : RESET_PASSWORD_MUTATION,
        variables : {...data}
    })
    return response
}

export default requestResetPassword