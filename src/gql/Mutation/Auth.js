import { gql } from "@apollo/client";

export const SIGNUP_USER_MUTATION = gql`
	mutation registerUser(
		$username: String!
		$email: String!
		$password: String!
	) {
		registerUser(username: $username, email: $email, password: $password) {
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
                username
                email
                role
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