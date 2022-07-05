
import { useMutation, useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';
import { UPDATE_ASSET_STATUS_MUTATION } from '../../gql/Mutation/AssetStatus';
import { GET_ASSET_STATUS_QUERY, GET_ASSET_STATUS_BY_ID_QUERY } from '../../gql/Query/AssetStatus';
import AssetStatusForm from './AssetStatusForm';
import openNotificationWithIcon from '../../Helper/Notification';
import Loader from '../../Components/UI/Loader';

const AssetStatusEdit = () => {
	const history = useHistory();
	const { id } = useParams();

	const { data, loading } = useQuery(GET_ASSET_STATUS_BY_ID_QUERY, {
		variables: { assetStatusById: id }
	});

	const [updateAssetStatus, { data : updatedData, loading : editLoading }] = useMutation(UPDATE_ASSET_STATUS_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSET_STATUS_QUERY },
		]
	});

	const handleAssetStatus = (values) => {
		updateAssetStatus({ variables: { updateAssetStatusId: id, input: { ...values } } });
	}

	if (updatedData) {
		openNotificationWithIcon('editAssetStatus','success', "ASSET STATUS EDITED SUCCESSFULLY")
		history.push('/asset-status');
	}
	if(loading || editLoading){
        return <Loader />
    }
	return (
		<div>
			{
				data?.assetStatusById && (
				<AssetStatusForm handleAssetStatus={handleAssetStatus} assetStatus={data?.assetStatusById} />
				)
			}
		</div>
	)
}

export default AssetStatusEdit