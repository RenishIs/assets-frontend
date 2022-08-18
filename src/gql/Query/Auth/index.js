import { gql } from '@apollo/client'

export const TOKEN_CHECK = gql`
query Query($id: String!, $token: String!) {
  checkToken(id: $id, token: $token) {
    message
  }
}
`