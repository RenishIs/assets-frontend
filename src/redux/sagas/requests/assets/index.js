import { client } from "../../../../App";
import { CREATE_ASSET_MUTATION, DELETE_ASSET_MUTATION, UPDATE_ASSET_MUTATION } from "../../../../gql/Mutation/Assets/index";
import { GET_ASSETS_QUERY, GET_ASSET_BY_ID_QUERY } from "../../../../gql/Query/Assets/index";

export const getAssetsRequest = async () => {
    const res = await client.query({
        query : GET_ASSETS_QUERY
    })
    return res
}

export const getSingleAssetRequest = async (id) => {
    const res = await client.query({
        query : GET_ASSET_BY_ID_QUERY,
        variables : { AssetId: id }
    })
    return res
}

export const editAssetRequest = async (payload) => {
    const res = await client.mutate({
        mutation : UPDATE_ASSET_MUTATION,
        variables : {...payload}
    })
    return res
}

export const addAssetRequest = async (payload) => {
    const res = await client.mutate({
        mutation : CREATE_ASSET_MUTATION,
        variables : {...payload}
    })
    return res
}

export const deleteAssetRequest = async (id) => {
    console.log(id,'delete id in request')
    const res = await client.mutate({
        mutation : DELETE_ASSET_MUTATION,
        variables : { deleteAssetId: id }
    })
    return res
}