
import { useMutation, useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';
import { UPDATE_ASSET_MUTATION } from '../../gql/Mutation/Assets';
import { GET_ASSETS_QUERY, GET_ASSET_BY_ID_QUERY } from '../../gql/Query/Assets';
import AssetsForm from './AssetsForm';
import openNotificationWithIcon from '../../Helper/Notification';
import Loader from '../../Components/UI/Loader';
import { GET_ASSET_STATUS_QUERY } from '../../gql/Query/AssetStatus';
import { GET_ASSET_TYPES_QUERY } from '../../gql/Query/AssetTypes';
import { GET_ASSET_CATEGORIES_QUERY } from '../../gql/Query/AssetCategories';

const AssetsEdit = () => {
	const history = useHistory();
	const { id } = useParams();

	const { data, loading } = useQuery(GET_ASSET_BY_ID_QUERY, {
		variables: { assetById: id }
	});

	const [updateAssets, { data : updatedData, loading : editLoading }] = useMutation(UPDATE_ASSET_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSETS_QUERY, variables : { status: null } },
			{ query: GET_ASSET_STATUS_QUERY },
			{ query: GET_ASSET_TYPES_QUERY },
			{ query : GET_ASSET_CATEGORIES_QUERY},
			{ query : GET_ASSET_BY_ID_QUERY, variables: { assetById: id } }
		]
	});

	const handleAsset = (values) => {
		updateAssets({ variables: { updateAssetsId: id, input: { ...values } } });
	}

	if (updatedData) {
		openNotificationWithIcon('editAsset','success', "Asset edited successfully")
		history.push('/assets');
	}
	if(loading){
		return <Loader />
	}
	return (
		<div>
			{
				data?.assetById && (
				<AssetsForm handleAsset={handleAsset} asset={data?.assetById} loading={editLoading}/>
				)
			}
		</div>
	)
}

export default AssetsEdit