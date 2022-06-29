import { gql } from "@apollo/client";

export const GET_ASSET_STATUS_QUERY = gql`
    query Query {
        assetStatus {
        id
        name
        }
    }
`

export const GET_ASSET_STATUS_BY_ID_QUERY = gql`
    query Query($assetStatusById: ID!) {
        assetStatusById(id: $assetStatusById) {
        id
        name
        }
    }
`

