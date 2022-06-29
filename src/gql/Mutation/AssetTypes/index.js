import { gql } from "@apollo/client";

export const CREATE_ASSET_TYPE_MUTATION = gql`
    mutation Mutation($input: AssetTypeInput!) {
        createAssetType(input: $input) {
        id
        name
        }
    }
`

export const UPDATE_ASSET_TYPE_MUTATION = gql`
    mutation Mutation($input: AssetTypeInput!, $updateAssetTypeId: ID) {
        updateAssetType(input: $input, id: $updateAssetTypeId) {
        id
        name
        }
    }
`

export const DELETE_ASSET_TYPE_MUTATION = gql`
    mutation Mutation($deleteAssetTypeId: ID) {
        deleteAssetType(id: $deleteAssetTypeId) {
        id
        }
    }
`