import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { CREATE_ASSET_TYPE_MUTATION } from '../../gql/Mutation/AssetTypes/index';
import { GET_ASSET_TYPES_QUERY } from '../../gql/Query/AssetTypes/index';
import AssetTypesForm from './AssetTypesForm';
import openNotificationWithIcon from '../../Helper/Notification';

const AssetTypeAdd = () => {
	const history = useHistory();

	const [addAssetType, { data, loading }] = useMutation(CREATE_ASSET_TYPE_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSET_TYPES_QUERY },
		]
	});

	if (data) {
		openNotificationWithIcon('addAssetType','success', "Asset type added successfully")
		history.push('/asset-types');
	}

	const handleAssetType = (values) => {
		addAssetType({ variables: { input: { ...values } } });
	}

	return (
		<div>
			<AssetTypesForm handleAssetType={handleAssetType} loading={loading}/>
		</div>
	)
}

export default AssetTypeAdd