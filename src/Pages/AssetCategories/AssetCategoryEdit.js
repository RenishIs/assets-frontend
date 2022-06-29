import { useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import AssetCategoryForm from './Form'
import { UPDATE_ASSET_CATEGORY_MUTATION } from '../../gql/Mutation/AssetCategories';
import { GET_ASSET_CATEGORIES_QUERY, GET_ASSET_CATEGORY_BY_ID_QUERY } from '../../gql/Query/AssetCategories';
import openNotificationWithIcon from '../../Helper/Notification';

const AssetCategoryEdit = () => {

    const { id } = useParams()
    const history = useHistory()

    const { data } = useQuery(GET_ASSET_CATEGORY_BY_ID_QUERY, {
        variables : { assetCategoryById : id }
    })

    const [ updateAssetCategory, { data : updatedAssetCategory }] = useMutation(UPDATE_ASSET_CATEGORY_MUTATION, {
        refetchQueries : [
            { query : GET_ASSET_CATEGORIES_QUERY}
        ]
    })

    if(updatedAssetCategory){
        openNotificationWithIcon('editAssetCategory','success', "ASSET CATEGORY EDITED SUCCESSFULLY")
		history.push('/asset-categories');
    }
    
    const handleAssetCategory = (values) => {
        updateAssetCategory({variables : { updateAssetCategoryId : id, input : {...values}}})
    }

    return (
        <>
        {
            data?.assetCategoryById && <AssetCategoryForm handleAssetCategory={handleAssetCategory} assetCategory={data?.assetCategoryById}/>

        }
        </>
    )
}

export default AssetCategoryEdit