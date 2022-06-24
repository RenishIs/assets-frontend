import {gql} from '@apollo/client'

export const GET_PROFILE_QUERY = gql`
query Query {
  Profile {
    id
    username
    email
    contactNo
    address
    role
    password
    isActive
  }
}
`