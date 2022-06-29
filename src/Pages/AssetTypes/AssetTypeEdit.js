
import { useMutation, useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';
import { UPDATE_ASSET_TYPE_MUTATION } from '../../gql/Mutation/AssetTypes';
import { GET_ASSET_TYPES_QUERY, GET_ASSET_TYPE_BY_ID_QUERY } from '../../gql/Query/AssetTypes';
import AssetTypesForm from './AssetTypesForm';
import openNotificationWithIcon from '../../Helper/Notification';

const AssetTypeEdit = () => {
	const history = useHistory();
	const { id } = useParams();

	const { data } = useQuery(GET_ASSET_TYPE_BY_ID_QUERY, {
		variables: { assetTypeByIdId: id }
	});

	const [updateAssetType, { data : updatedData }] = useMutation(UPDATE_ASSET_TYPE_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSET_TYPES_QUERY },
		]
	});

	const handleAssetType = (values) => {
		updateAssetType({ variables: { updateAssetTypeId: id, input: { ...values } } });
	}

	if (updatedData) {
		openNotificationWithIcon('editAssetType','success', "ASSET TYPE EDITED SUCCESSFULLY")
		history.push('/asset-types');
	}
	
	return (
		<div>
			{
				data?.assetTypeById && (
				<AssetTypesForm handleAssetType={handleAssetType} assetType={data?.assetTypeById} />
				)
			}
		</div>
	)
}

export default AssetTypeEdit