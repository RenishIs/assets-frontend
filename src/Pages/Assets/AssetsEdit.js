
import { useMutation, useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';
import { UPDATE_ASSET_MUTATION } from '../../gql/Mutation/Assets';
import { GET_ASSETS_QUERY, GET_ASSET_BY_ID_QUERY } from '../../gql/Query/Assets';
import AssetsForm from './AssetsForm';

const AssetsEdit = () => {
	const history = useHistory();
	const { id } = useParams();

	const { data } = useQuery(GET_ASSET_BY_ID_QUERY, {
		variables: { assetId: id }
	});

	const [updateAssets, { data : updatedData }] = useMutation(UPDATE_ASSET_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSETS_QUERY },
		]
	});

	const handleAsset = (values) => {
		updateAssets({ variables: { updateAssetsId: id, input: { ...values } } });
	}

	if (updatedData) {
		history.push('/assets');
	}
	
	return (
		<div>
			{
				data?.Asset && (
				<AssetsForm handleAsset={handleAsset} asset={data?.Asset} />
				)
			}
		</div>
	)
}

export default AssetsEdit