import { gql } from "@apollo/client";

export const CREATE_ASSET_MUTATION = gql`
    mutation Mutation($input: CreateAssetsInput!) {
        createAssets(input: $input) {
        id
        name
        description
        }
    }
`

export const UPDATE_ASSET_MUTATION = gql`
    mutation Mutation($input: UpdateAssetsInput!, $updateAssetsId: ID) {
        updateAssets(input: $input, id: $updateAssetsId) {
        id
        name
        description
        }
    }
`

export const DELETE_ASSET_MUTATION = gql`
    mutation Mutation($deleteAssetsId: ID) {
        deleteAssets(id: $deleteAssetsId) {
        id
        }
    }
`