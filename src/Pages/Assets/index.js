import { Table, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { tableColumns } from './CONSTANTS';
import Dashboard from '../Dashboard';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ASSETS_QUERY } from '../../gql/Query/Assets';
import { DELETE_ASSET_MUTATION } from '../../gql/Mutation/Assets';
import openNotificationWithIcon from '../../Helper/Notification';

const AssetsListing = () => {

	const { data } = useQuery(GET_ASSETS_QUERY);

	const [deleteAssets, { error, data : deletedAsset }] = useMutation(DELETE_ASSET_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSETS_QUERY },
		]
	});

	if(deletedAsset){
        openNotificationWithIcon('success', "ASSET DELETED SUCCESSFULLY")
    }
	if(error) {
		alert(error);	
	}
	
	const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Link to={`/assets/edit/${record.id}`}><Button type="primary">EDIT</Button></Link>
				<Button type="primary" danger onClick={() => deleteAssets({ variables:  { deleteAssetsId: record.id } } )}>DELETE</Button>
			</Space>
		),
	}]

	return (
		<Dashboard>
			<Table bordered columns={columns} dataSource={data?.Assets} pagination={false} />
		</Dashboard>
	)
}

export default AssetsListing