import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
            id
            username
            email
            contactNo
            address
            role {
                name
            }
            password
            isActive
        }
    }
`

export const UPDATE_USER_MUTATION = gql`
    mutation UpdateUser($updateUserId: ID!, $input: UpdateUserInput!) {
        updateUser(id: $updateUserId, input: $input) {
            id
            username
            email
            contactNo
            address
            role {
                name
            }
            password
            isActive
        }
    }
`

export const DELETE_USER_MUTATION = gql`
    mutation DeleteUser($deleteUserId: ID!) {
        deleteUser(id: $deleteUserId) {
            id
        }
    }
`