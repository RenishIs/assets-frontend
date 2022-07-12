import { gql } from "@apollo/client";

export const SIGNUP_USER_MUTATION = gql`
	mutation registerUser(
		$firstName: String!
		$lastName: String!
		$email: String!
		$password: String!
	) {
		registerUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
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