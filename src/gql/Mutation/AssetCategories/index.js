import { gql } from "@apollo/client";

export const ADD_ASSET_CATEGORY_MUTATION = gql`
    mutation Mutation($input: AssetCategoryInput!) {
        createAssetCategory(input: $input) {
        id
        name
        }
    }
`

export const UPDATE_ASSET_CATEGORY_MUTATION = gql`
    mutation Mutation($input: AssetCategoryInput!, $updateAssetCategoryId: ID) {
        updateAssetCategory(input: $input, id: $updateAssetCategoryId) {
            id
            name
        }
    }
`

export const DELETE_ASSET_CATEGORY_MUTATION = gql`
    mutation Mutation($deleteAssetCategoryId: ID) {
        deleteAssetCategory(id: $deleteAssetCategoryId) {
            id
        }
    }
`