import { gql } from "@apollo/client";

export const GET_USERS_QUERY = gql`
    query Users {
        users {
			id
			username
			email
			role
			password
			isActive
			address
		}
	}
`

export const GET_USER_BY_ID_QUERY = gql`
	query Query($userId: ID!) {
		userById(id: $userId) {
			id,
			username,
			email,
			role,
			password,
			address,
			contactNo
		}
	}
`

