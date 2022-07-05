import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { CREATE_ASSET_STATUS_MUTATION } from '../../gql/Mutation/AssetStatus';
import { GET_ASSET_STATUS_QUERY } from '../../gql/Query/AssetStatus';
import AssetStatusForm from './AssetStatusForm';
import openNotificationWithIcon from '../../Helper/Notification';
import Loader from '../../Components/UI/Loader';

const AssetStatusAdd = () => {
	const history = useHistory();
	const [addAssetStatus, { data, loading }] = useMutation(CREATE_ASSET_STATUS_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSET_STATUS_QUERY },
		]
	});

	if (data) {
		openNotificationWithIcon('addAssetStatus','success', "ASSET STATUS ADDED SUCCESSFULLY")
		history.push('/asset-status');
	}
    if(loading){
		return <Loader />
    }
	const handleAssetStatus = (values) => {
		addAssetStatus({ variables: { input: { ...values } } });
	}

	return (
		<AssetStatusForm handleAssetStatus={handleAssetStatus} />
	)
}

export default AssetStatusAdd