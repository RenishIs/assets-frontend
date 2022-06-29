import { gql } from "@apollo/client";

export const CREATE_ASSET_STATUS_MUTATION = gql`
    mutation Mutation($input: AssetStatusInput!) {
        createAssetStatus(input: $input) {
        id
        name
        }
    }
`

export const UPDATE_ASSET_STATUS_MUTATION = gql`
    mutation Mutation($input: AssetStatusInput!, $updateAssetStatusId: ID) {
        updateAssetStatus(input: $input, id: $updateAssetStatusId) {
        id
        name
        }
    }
`

export const DELETE_ASSET_STATUS_MUTATION = gql`
    mutation Mutation($deleteAssetStatusId: ID) {
        deleteAssetStatus(id: $deleteAssetStatusId) {
        id
        }
    }
`