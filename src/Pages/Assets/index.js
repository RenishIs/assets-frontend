import { Link, useHistory } from 'react-router-dom';
import { Table, Space, Button, Modal } from 'antd';
import { tableColumns } from './CONSTANTS';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ASSETS_QUERY } from '../../gql/Query/Assets';
import { DELETE_ASSET_MUTATION } from '../../gql/Mutation/Assets';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled, EyeFilled } from '@ant-design/icons';
import Loader from '../../Components/UI/Loader';
import { Tooltip } from 'antd';

const confirm = Modal.confirm;

const AssetsListing = () => {

	const { loading, data } = useQuery(GET_ASSETS_QUERY);
	const history = useHistory()

	const showDeleteConfirm = (e, id) => {
		e.stopPropagation(); 
		confirm({
		  title: 'Are you sure?',
		  content: 'Do you really want to delete this Asset? This process cannot be undone.',
		  okText: 'Yes',
		  okType: 'danger',
		  cancelText: 'No',
		  onOk() {
			deleteAssets({ variables:  { deleteAssetsId: id } } )
		  },
		  onCancel() {
			console.log('Cancel');
		  },
		});
	  }

	const [deleteAssets, { error, data : deletedAsset, loading : deleteLoading }] = useMutation(DELETE_ASSET_MUTATION, {
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
				<Tooltip title="Edit"><Link to="#"  onClick={(e) => {
					e.stopPropagation();      
					history.push(`/assets/edit/${record.id}`)
				}}><EditFilled style={{color: "blue"}}/></Link></Tooltip>
				<Tooltip title="Delete"><DeleteFilled style={{color: "red"}} onClick={(e) => showDeleteConfirm(e, record.id)}/></Tooltip>
				<Tooltip title="View"><Link to={`/assets/${record.id}`}><EyeFilled style={{color:"green"}}/></Link></Tooltip>
			</Space>
		),
	}]

	const navigation = (id) => {
		history.push(`/assets/${id}`)
	}
	
	return (
		<>
			{ (loading || deleteLoading ) && <Loader /> }
			<div className='text-center mb-3'>
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
		</>
	)
}

export default AssetsListing