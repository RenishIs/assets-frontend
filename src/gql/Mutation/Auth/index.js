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
`

export const LOGIN_USER_MUTATION = gql`
	mutation loginUser ($email: String!, $password: String!) {
		loginUser (email: $email, password: $password) {
			token
		}
	}
`

export const RESET_PASSWORD_MUTATION = gql`
	mutation sendResetPasswordLink($email : String!){
		sendResetPasswordLink(email : $email){
			message
		}
	}
`
// export const CHANGE_PASSWORD_MUTATION = gql`
// 	mutation resetPassword
// `