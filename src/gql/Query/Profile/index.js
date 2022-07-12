import {gql} from '@apollo/client'

export const GET_PROFILE_QUERY = gql`
query Query {
  Profile {
    id
    firstName
    lastName
    email
    contactNo
    address
    role{
      id,
      name
    }
    password
    isActive
  }
}
`