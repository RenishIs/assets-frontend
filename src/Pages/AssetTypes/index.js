import { Table, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { tableColumns } from './CONSTANTS';
import Dashboard from '../Dashboard';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ASSET_TYPES_QUERY } from '../../gql/Query/AssetTypes';
import { DELETE_ASSET_TYPE_MUTATION } from '../../gql/Mutation/AssetTypes';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

const AssetTypesListing = () => {

	const { data } = useQuery(GET_ASSET_TYPES_QUERY);

	const [deleteAssetType, { error, data : deletedAssetType }] = useMutation(DELETE_ASSET_TYPE_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSET_TYPES_QUERY },
		]
	});

	if(deletedAssetType){
        openNotificationWithIcon('deleteAssetType', 'success', "ASSET TYPE DELETED SUCCESSFULLY")
    }
	if(error) {
		alert(error);	
	}
	
	const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Link to={`/asset-types/edit/${record.id}`}><EditFilled style={{color: "blue"}}/></Link>
				<DeleteFilled style={{color: "red"}} onClick={() => deleteAssetType({ variables:  { deleteAssetTypeId: record.id } } )}/>
			</Space>
		),
	}]

	return (
		<Dashboard>
			<div className='text-center mb-3'>
                <h2 className='d-inline fs-4 fw-bold'>MANAGE ASSET TYPES</h2>
                <div className='add-button'>
                    <Link to={`/asset-types/add`}><Button type="primary">ADD</Button></Link>
                </div>
            </div>
			<Table bordered columns={columns} dataSource={data?.assetTypes} pagination={false} />
		</Dashboard>
	)
}

export default AssetTypesListing