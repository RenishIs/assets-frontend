import { Table, Space, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { tableColumns } from './CONSTANTS';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ASSET_TYPES_QUERY } from '../../gql/Query/AssetTypes';
import { DELETE_ASSET_TYPE_MUTATION } from '../../gql/Mutation/AssetTypes';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import Loader from '../../Components/UI/Loader';
import { Tooltip } from 'antd';

const confirm = Modal.confirm;

const AssetTypesListing = () => {

	const { loading, data } = useQuery(GET_ASSET_TYPES_QUERY);

	const showDeleteConfirm = (id) => {
		confirm({
		  title: 'Are you sure?',
		  content: 'Do you really want to delete this Asset type? This process cannot be undone.',
		  okText: 'Yes',
		  okType: 'danger',
		  cancelText: 'No',
		  onOk() {
			deleteAssetType({ variables:  { deleteAssetTypeId: id } })
		  },
		  onCancel() {
			console.log('Cancel');
		  },
		});
	  }

	const [deleteAssetType, { error, data : deletedAssetType, loading : deleteLoading }] = useMutation(DELETE_ASSET_TYPE_MUTATION, {
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
				<Tooltip title="Edit"><Link to={`/asset-types/edit/${record.id}`}><EditFilled style={{color: "blue"}}/></Link></Tooltip>
				<Tooltip title="Delete"><DeleteFilled style={{color: "red"}} onClick={() => showDeleteConfirm(record.id)}/></Tooltip>
			</Space>
		),
	}]

	return (
		<>
			{ (loading || deleteLoading ) && <Loader /> }
			<div className='text-center mb-3'>
                <h2 className='d-inline fs-4 fw-bold'>MANAGE ASSET TYPES</h2>
                <div className='add-button'>
                    <Link to={`/asset-types/add`}><Button type="primary">ADD</Button></Link>
                </div>
            </div>
			<Table bordered 
			       columns={columns} 
				   dataSource={data?.assetTypes.map(item => ({...item, key: item.id}))} 
				   pagination={false} />
		</>
	)
}

export default AssetTypesListing