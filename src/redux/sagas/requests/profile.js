import {client} from '../../../App'
import { GET_PROFILE_QUERY } from '../../../gql/Query/profile'

export const getProfileRequest = async () => {
    const response = await client.query({
        query: GET_PROFILE_QUERY
    })
    return response
}