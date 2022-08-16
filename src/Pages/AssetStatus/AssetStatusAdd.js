import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { CREATE_ASSET_STATUS_MUTATION } from '../../gql/Mutation/AssetStatus';
import { GET_ASSET_STATUS_QUERY } from '../../gql/Query/AssetStatus';
import AssetStatusForm from './AssetStatusForm';
import openNotificationWithIcon from '../../Helper/Notification';

const AssetStatusAdd = () => {
	const history = useHistory();
	const [addAssetStatus, { data, loading }] = useMutation(CREATE_ASSET_STATUS_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSET_STATUS_QUERY },
		]
	});

	if (data) {
		openNotificationWithIcon('addAssetStatus','success', "Asset status added successfully")
		history.push('/asset-status');
	}

	const handleAssetStatus = (values) => {
		addAssetStatus({ variables: { input: { ...values } } });
	}

	return (
		<AssetStatusForm handleAssetStatus={handleAssetStatus} loading={loading} />
	)
}

export default AssetStatusAdd