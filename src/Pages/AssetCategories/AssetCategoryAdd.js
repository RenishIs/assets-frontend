import { useMutation } from '@apollo/client'
import AssetCategoryForm from './Form'
import { useHistory } from 'react-router-dom'
import { ADD_ASSET_CATEGORY_MUTATION } from '../../gql/Mutation/AssetCategories'
import { GET_ASSET_CATEGORIES_QUERY } from '../../gql/Query/AssetCategories'
import openNotificationWithIcon from '../../Helper/Notification'

const AssetCategoryAdd = () => {
    
    const history = useHistory()

    const [ createAssetCategory, { data, loading } ] = useMutation(ADD_ASSET_CATEGORY_MUTATION, {
        refetchQueries : [
            { query : GET_ASSET_CATEGORIES_QUERY}
        ]
    })

    if(data){
        openNotificationWithIcon('addAssetCategory', 'success', 'ASSET CATEGORY ADDED SUCCESSFULLY')
        history.push('/asset-categories')
    }

    const handleAssetCategory = (values) => {
        createAssetCategory({variables : { input : {...values}}})
    }

    return (
        <AssetCategoryForm handleAssetCategory={handleAssetCategory} loading={loading}/>
    )
}

export default AssetCategoryAdd