import {client} from '../../../../App'
import { RESET_PASSWORD } from '../../../../gql/Mutation/Auth'

const resetPasswordRequest = async (data) => {
    const res = await client.mutate({
        mutation : RESET_PASSWORD,
        variables : {...data}
    })
    return res
}

export default resetPasswordRequest