import { Table, Space, Button } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { tableColumns } from './CONSTANTS';
import Dashboard from '../Dashboard';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ASSETS_QUERY } from '../../gql/Query/Assets';
import { DELETE_ASSET_MUTATION } from '../../gql/Mutation/Assets';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

const AssetsListing = () => {

	const { data } = useQuery(GET_ASSETS_QUERY);
	const history = useHistory()

	const [deleteAssets, { error, data : deletedAsset }] = useMutation(DELETE_ASSET_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSETS_QUERY },
		]
	});

	if(deletedAsset){
        openNotificationWithIcon('deleteAsset', 'success', "ASSET DELETED SUCCESSFULLY")
    }
	if(error) {
		alert(error);	
	}
	
	const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Link to={`/assets/edit/${record.id}`}><EditFilled style={{color: "blue"}}/></Link>
				<DeleteFilled style={{color: "red"}} onClick={() => deleteAssets({ variables:  { deleteAssetsId: record.id } } )}/>
			</Space>
		),
	}]

	const navigation = (id) => {
		history.push(`/assets/${id}`)
	}
	
	return (
		<Dashboard>
			<div className='text-cente mb-3'>
                <h2 className='d-inline fs-4 fw-bold'>MANAGE ASSETS</h2>
                <div className='add-button'>
                    <Link to={`/assets/add`}><Button type="primary">ADD</Button></Link>
                </div>
            </div>
			<Table bordered 
			       columns={columns} 
				   dataSource={data?.assets.map(item => ({...item, key: item.id}))} 
				   pagination={false} 
				   onRow={(record, rowIndex) => {
						return {
							onClick: (event) => navigation(record.id) 
						}
				   }}
				   />
		</Dashboard>
	)
}

export default AssetsListing