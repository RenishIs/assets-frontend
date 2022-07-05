import { gql } from "@apollo/client";

export const GET_ASSETS_QUERY = gql`
    query Query {
        assets {
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
            username
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
    query AssetById($assetById: ID!) {
        assetById(id: $assetById) {
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
            username
            email
            role {
            name
            }
        }
        dateOfAssetAssignment
        }
    }
`

