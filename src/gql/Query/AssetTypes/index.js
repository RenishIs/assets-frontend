import { gql } from "@apollo/client";

export const GET_ASSET_TYPES_QUERY = gql`
    query Query {
        assetTypes {
        id
        name
        assigned
        }
    }
`

export const GET_ASSET_TYPE_BY_ID_QUERY = gql`
    query Query($assetTypeByIdId: ID!) {
        assetTypeById(id: $assetTypeByIdId) {
        id
        name
        }
    }
`