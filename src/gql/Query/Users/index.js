import { gql } from "@apollo/client";

export const GET_USERS_QUERY = gql`
    query Users {
        users {
			id
			username
			email
			role{
				id,
				name
			}
			password
			isActive
			address
		}
	}
`

export const GET_USER_BY_ID_QUERY = gql`
	query Query($userByIdId: ID!) {
		userById(id: $userByIdId) {
			username
			email
			contactNo
			address
			role {
				name
			}
			password
			isActive
			assetDetails {
				name
				description
				location
				purchasedOn
				assetCondition
				reason
				dateOfAssetAssignment
			}
		}
	}
`
export const GET_USER_ROLE = gql`
	query Role {
		role {
		id
		name
		}
	}
`
