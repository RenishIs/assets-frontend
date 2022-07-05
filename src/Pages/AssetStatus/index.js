import { Table, Space, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { tableColumns } from './CONSTANTS';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ASSET_STATUS_QUERY } from '../../gql/Query/AssetStatus';
import { DELETE_ASSET_STATUS_MUTATION } from '../../gql/Mutation/AssetStatus';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import Loader from '../../Components/UI/Loader';

const confirm = Modal.confirm;

const AssetStatusListing = () => {

	const { loading, data } = useQuery(GET_ASSET_STATUS_QUERY);

	const showDeleteConfirm = (id) => {
		confirm({
		  title: 'Are you sure?',
		  content: 'Do you really want to delete this Asset Status? This process cannot be undone.',
		  okText: 'Yes',
		  okType: 'danger',
		  cancelText: 'No',
		  onOk() {
			deleteAssetStatus({ variables:  { deleteAssetStatusId: id } } )
		  },
		  onCancel() {
			console.log('Cancel');
		  },
		});
	  }

	const [deleteAssetStatus, { error, data : deletedAssetStatus, loading : deleteLoading }] = useMutation(DELETE_ASSET_STATUS_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSET_STATUS_QUERY },
		]
	});

	if(deletedAssetStatus){
        openNotificationWithIcon('deleteAssetStatus', 'success', "ASSET STATUS DELETED SUCCESSFULLY")
    }
	if(error) {
		alert(error);	
	}

	if(loading || deleteLoading){
		return <Loader />
	}
	
	const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Link to={`/asset-status/edit/${record.id}`}><EditFilled style={{color: "blue"}}/></Link>
				<DeleteFilled style={{color: "red"}} onClick={() => showDeleteConfirm(record.id)}/>
			</Space>
		),
	}]

	return (
		<>
			<div className='text-cente mb-3'>
                <h2 className='d-inline fs-4 fw-bold'>MANAGE ASSET STATUS</h2>
                <div className='add-button'>
                    <Link to={`/asset-status/add`}><Button type="primary">ADD</Button></Link>
                </div>
            </div>
			<Table bordered 
			       columns={columns} 
				   dataSource={data?.assetStatus.map(item => ({...item, key: item.id}))} 
				   pagination={false} />
		</>
	)
}

export default AssetStatusListing