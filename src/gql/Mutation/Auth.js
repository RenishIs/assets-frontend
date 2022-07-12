import { gql } from "@apollo/client";

export const SIGNUP_USER_MUTATION = gql`
	mutation Mutation($email: String!, $password: String!, $lastName: String, $firstName: String) {
		registerUser(email: $email, password: $password, lastName: $lastName, firstName: $firstName) {
			token
		}
	}
`

export const LOGIN_USER_MUTATION = gql`
	mutation loginUser ($email: String!, $password: String!) {
		loginUser (email: $email, password: $password) {
			token,
            user {
                id
				firstName
				lastName
                email
                role {
					name
				}
            }
		}
	}
`

export const RESET_PASSWORD_LINK = gql`
	mutation sendResetPasswordLink($email : String!){
		sendResetPasswordLink(email : $email){
			message
		}
	}
`
export const RESET_PASSWORD = gql`
	mutation resetPassword ($password: String!, $id: String!) {
		resetPassword (password: $password, id: $id) {
			message
		}
	}
`