import { useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import AssetCategoryForm from './Form'
import { UPDATE_ASSET_CATEGORY_MUTATION } from '../../gql/Mutation/AssetCategories';
import { GET_ASSET_CATEGORIES_QUERY, GET_ASSET_CATEGORY_BY_ID_QUERY } from '../../gql/Query/AssetCategories';
import openNotificationWithIcon from '../../Helper/Notification';
import Loader from '../../Components/UI/Loader';

const AssetCategoryEdit = () => {

    const { id } = useParams()
    const history = useHistory()

    const { data, loading } = useQuery(GET_ASSET_CATEGORY_BY_ID_QUERY, {
        variables : { assetCategoryById : id }
    })

    const [ updateAssetCategory, { data : updatedAssetCategory, loading : editLoading }] = useMutation(UPDATE_ASSET_CATEGORY_MUTATION, {
        refetchQueries : [
            { query : GET_ASSET_CATEGORIES_QUERY}
        ]
    })

    if(loading){
        return <Loader />
    }

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
            data?.assetCategoryById && <AssetCategoryForm handleAssetCategory={handleAssetCategory} assetCategory={data?.assetCategoryById} loading={editLoading}/>

        }
        </>
    )
}

export default AssetCategoryEdit