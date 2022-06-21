import {gql} from '@apollo/client'

export const GET_PROFILE_QUERY = gql`
query Query {
    Profile {
      username
      email
      role
    }
  }
`