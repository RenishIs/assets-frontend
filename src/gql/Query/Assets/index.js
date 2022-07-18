import { gql } from "@apollo/client";

export const GET_ASSETS_QUERY = gql`
    query Query($status : String ) {
        assets(status: $status) {
        id
        name
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
            email
            role {
            name
            }
        }
        dateOfAssetAssignment
        }
    }
`

export const GET_ASSET_BY_ID_QUERY = gql`
    query Query($assetById: ID!) {
        assetById(id: $assetById) {
        id
        name
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
