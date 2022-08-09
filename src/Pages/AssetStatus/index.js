import { Table, Space, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { tableColumns } from './CONSTANTS';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ASSET_STATUS_QUERY } from '../../gql/Query/AssetStatus';
import { DELETE_ASSET_STATUS_MUTATION } from '../../gql/Mutation/AssetStatus';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import Loader from '../../Components/UI/Loader';
import { Tooltip } from 'antd';

const confirm = Modal.confirm;

const AssetStatusListing = () => {

	const { loading, data } = useQuery(GET_ASSET_STATUS_QUERY);

	const errorIfAssigned = () => {
		Modal.error({
		  title: 'This asset status is being used!!',
		  content: 'You cannot delete this asset status, if you want to then delete the asset associated with the status',
		});
	  };

	const showDeleteConfirm = (id) => {
		const assetSatusById=data?.assetStatus.find(assetStatus => assetStatus.id === id)
		{
			assetSatusById?.assigned 
			?
				errorIfAssigned()
			:
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
	  }

	const [deleteAssetStatus, { error, data : deletedAssetStatus, loading : deleteLoading }] = useMutation(DELETE_ASSET_STATUS_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSET_STATUS_QUERY },
		]
	});

	if(deletedAssetStatus){
        openNotificationWithIcon('deleteAssetStatus', 'success', "Asset status deleted successfully")
    }
	if(error) {
		alert(error);	
	}

	const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Tooltip title="Edit"><Link to={`/asset-status/edit/${record.id}`}><EditFilled style={{color: "blue"}}/></Link></Tooltip>
				<Tooltip title="Delete"><DeleteFilled style={{color: "red"}} onClick={() => showDeleteConfirm(record.id)}/></Tooltip>
			</Space>
		),
	}]

	return (
		<>
			{ (loading || deleteLoading ) && <Loader /> }
			<div className='text-center mb-3'>
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