import { gql } from "@apollo/client";

export const GET_ASSET_CATEGORIES_QUERY = gql`
    query Query {
        assetCategories {
            id
            name
        }
    }
`

export const GET_ASSET_CATEGORY_BY_ID_QUERY = gql`
    query AssetCategoryById($assetCategoryById: ID!) {
        assetCategoryById(id: $assetCategoryById) {
            id
            name
        }
    }
`