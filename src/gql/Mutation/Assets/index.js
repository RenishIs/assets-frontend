import { gql } from "@apollo/client";

export const CREATE_ASSET_MUTATION = gql`
    mutation Mutation($input: CreateAssetsInput!) {
        createAsset(input: $input) {
        id
        name
        description
        }
    }
`

export const UPDATE_ASSET_MUTATION = gql`
    mutation Mutation($input: UpdateAssetsInput!, $updateAssetsId: ID) {
        updateAsset(input: $input, id: $updateAssetsId) {
        id
        name
        description
        }
    }
`

export const DELETE_ASSET_MUTATION = gql`
    mutation Mutation($deleteAssetsId: ID) {
        deleteAsset(id: $deleteAssetsId) {
        id
        }
    }
`