import { gql } from "@apollo/client";

export const GET_USERS_QUERY = gql`
	query Users($status: Status, $page: Int) {
		users(status: $status, page: $page) {
		  users {
			id
			firstName
			lastName
			email
			contactNo
			address
			isActive
			role {
				id,
				name
			}
			employeeCode
		  }
		  total
		  totalPages
		  currentPage
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
			employeeCode
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
					lastName
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

export const GET_USERS_BY_ROLE = gql`
query UsersByRole($roleId: String) {
	usersByRole(roleId: $roleId) {
		id
		firstName
		lastName
		email
		role {
			name
			id
		}
		}
	}
`