import { gql } from "@apollo/client";

export const GET_USERS_QUERY = gql`
    query Users($status: Status) {
        users(status: $status) {
			id
			username
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
			username
			email
			contactNo
			address
			role {
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
					username
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
