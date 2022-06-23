import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { CREATE_ASSET_MUTATION } from '../../gql/Mutation/Assets';
import { GET_ASSETS_QUERY } from '../../gql/Query/Assets';
import AssetsForm from './AssetsForm';

const AssetsAdd = () => {
	const history = useHistory();
	const [addAssets, { data }] = useMutation(CREATE_ASSET_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSETS_QUERY },
		]
	});

	if (data) {
		history.push('/assets');
	}

	const handleAsset = (values) => {
		addAssets({ variables: { input: { ...values } } });
	}

	return (
		<AssetsForm handleAsset={handleAsset} />
	)
}

export default AssetsAdd