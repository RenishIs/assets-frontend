import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { CREATE_ASSET_MUTATION } from '../../gql/Mutation/Assets';
import { GET_ASSETS_QUERY } from '../../gql/Query/Assets';
import AssetsForm from './AssetsForm';
import openNotificationWithIcon from '../../Helper/Notification';
import { GET_ASSET_STATUS_QUERY } from '../../gql/Query/AssetStatus';
import { GET_ASSET_TYPES_QUERY } from '../../gql/Query/AssetTypes';
import { GET_ASSET_CATEGORIES_QUERY } from '../../gql/Query/AssetCategories';

const AssetsAdd = () => {
	const history = useHistory();
	const [addAssets, { data, loading }] = useMutation(CREATE_ASSET_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSETS_QUERY, variables : { status: null } },
			{ query: GET_ASSET_STATUS_QUERY },
			{ query: GET_ASSET_TYPES_QUERY },
			{ query : GET_ASSET_CATEGORIES_QUERY}
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