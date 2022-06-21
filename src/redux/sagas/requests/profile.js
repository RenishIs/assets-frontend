import {client} from '../../../App'
import { GET_PROFILE_QUERY } from '../../../gql/Query/profile'

export const getProfileRequest = async (data) => {
    const response = await client.query({
        query: GET_PROFILE_QUERY,
        variables : {...data}
    })
    return response
}