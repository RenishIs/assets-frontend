import { gql } from "@apollo/client";

export const GET_ASSETS_QUERY = gql`
  query Query($page: Int, $status: String) {
    assets(page: $page, status: $status) {
      assets {
        id
        name
        description
        location
        assetId
        assetCategory {
            id
            name
        }
        assetType {
            id
            name
        }
        purchasedOn
        assetCondition
        assetStatus {
            id
            name
        }
        reason
        employeeId {
            id
            firstName
            lastName
            email
            employeeCode
            role {
            name
            }
        }
        dateOfAssetAssignment
      }
      total
      totalPages
      currentPage
    }
  }
  
`

export const GET_ASSET_BY_ID_QUERY = gql`
    query Query($assetById: ID!) {
        assetById(id: $assetById) {
        id
        name
        assetId
        description
        location
        assetCategory {
            id
            name
        }
        assetType {
            id
            name
        }
        purchasedOn
        assetCondition
        assetStatus {
            id
            name
        }
        reason
        employeeId {
            id
            firstName
            lastName
        }
        dateOfAssetAssignment
        history {
            employeeId {
            firstName
            lastName
            id
            email
            }
            dateOfAssetAssignment
        }
        }
    }
`
export const GET_EMPLOYEE_ASSETS_QUERY = gql`
  query Users($page: Int) {
    employeeAssets(page: $page) {
      assets {
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
        assetId
        dateOfAssetAssignment
        history {
          employeeId {
            firstName
            lastName
          }
        }
      }
      total
      totalPages
      currentPage
    }
  }
  
  `