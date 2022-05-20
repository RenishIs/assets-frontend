import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
  mutation registerUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    registerUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;