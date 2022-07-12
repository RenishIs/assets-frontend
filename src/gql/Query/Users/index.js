import { gql } from "@apollo/client";

export const GET_USERS_QUERY = gql`
    query Users($status: Status) {
        users(status: $status) {
			id
			firstName
			lastName
			email
			role{
				id,
				name
			}
			isActive
			address
		}
	}
`

export const GET_USER_BY_ID_QUERY = gql`
	query Query($userByIdId: ID!) {
		userById(id: $userByIdId) {
			firstName
			lastName
			email
			contactNo
			address
			role {
				id,
				name
			}
			isActive
			assetDetails {
				id
				name
				description
				location
				assetCategory {
				  name
				}
				assetType {
				  name
				}
				purchasedOn
				assetCondition
				assetStatus {
				  name
				}
				reason
				employeeId {
					firstName
				}
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
