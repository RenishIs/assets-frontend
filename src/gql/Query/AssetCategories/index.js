import { gql } from "@apollo/client";

export const GET_ASSET_CATEGORIES_QUERY = gql`
    query Query {
        assetCategories {
            id
            name
            assigned
        }
    }
`

export const GET_ASSET_CATEGORY_BY_ID_QUERY = gql`
query AssetCategoryById($assetCategoryByIdId: ID!) {
    assetCategoryById(id: $assetCategoryByIdId) {
      id
      name
      assigned
    }
  }
`