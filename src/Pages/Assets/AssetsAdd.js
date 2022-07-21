import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { CREATE_ASSET_MUTATION } from '../../gql/Mutation/Assets';
import { GET_ASSETS_QUERY } from '../../gql/Query/Assets';
import AssetsForm from './AssetsForm';
import openNotificationWithIcon from '../../Helper/Notification';

const AssetsAdd = () => {
	const history = useHistory();
	const [addAssets, { data, loading }] = useMutation(CREATE_ASSET_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSETS_QUERY, variables : { status: null } },
		]
	});

	if (data) {
		openNotificationWithIcon('addAssest','success', "ASSET ADDED SUCCESSFULLY")
		history.push('/assets');
	}

	const handleAsset = (values) => {
		addAssets({ variables: { input: { ...values } } });
	}

	return (
		<AssetsForm handleAsset={handleAsset} loading={loading}/>
	)
}

export default AssetsAdd