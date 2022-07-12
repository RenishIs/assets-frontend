import { gql } from "@apollo/client";

export const CREATE_USER_MUTATION = gql`
    mutation CreateUser($input: CreateUserInput!) {
        createUser(input: $input) {
            id
            firstName
            lastName
            email
            contactNo
            address
            role {
                name
            }
            isActive
            employeeCode
        }
    }
`

export const UPDATE_USER_MUTATION = gql`
    mutation UpdateUser($updateUserId: ID!, $input: UpdateUserInput!) {
        updateUser(id: $updateUserId, input: $input) {
            id
            firstName
            lastName
            email
            contactNo
            address
            role {
                name
            }
            isActive
            employeeCode
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