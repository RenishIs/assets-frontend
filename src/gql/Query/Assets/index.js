import { gql } from "@apollo/client";

export const GET_ASSETS_QUERY = gql`
    query Query {
        Assets {
        id
        name
        description
        }
    }
`

export const GET_ASSET_BY_ID_QUERY = gql`
    query Query($assetId: ID!) {
        Asset(id: $assetId) {
        id
        name
        description
        }
    }
`

