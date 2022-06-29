import { Table, Space, Button, Modal } from 'antd';
import { useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
import { GET_ASSET_CATEGORIES_QUERY } from '../../gql/Query/AssetCategories';
import { DELETE_ASSET_CATEGORY_MUTATION } from '../../gql/Mutation/AssetCategories';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

const confirm = Modal.confirm;

const tableColumns = [
	{
		title: 'CATEGORY',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <span>{text}</span>,
	},
]

const AssetCategories = () => {

	const { data } = useQuery(GET_ASSET_CATEGORIES_QUERY);

	const showDeleteConfirm = (id) => {
		confirm({
		  title: 'Are you sure?',
		  content: 'Do you really want to delete this Asset category? This process cannot be undone.',
		  okText: 'Yes',
		  okType: 'danger',
		  cancelText: 'No',
		  onOk() {
			deleteAssetCategory({ variables: { deleteAssetCategoryId: id } })
		  },
		  onCancel() {
			console.log('Cancel');
		  },
		});
	  }

	const [ deleteAssetCategory, { data: deletedAssetCategory }] = useMutation(DELETE_ASSET_CATEGORY_MUTATION, {
		refetchQueries : [
			{ query : GET_ASSET_CATEGORIES_QUERY }
		]
	})

	if(deletedAssetCategory){
		openNotificationWithIcon('deleteAssetCategory', 'success', "ASSET CATEGORY DELETED SUCCESSFULLY")
	}

	const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Link to={`/asset-categories/edit/${record.id}`}><EditFilled style={{color: "blue"}}/></Link>
				<DeleteFilled style={{color: "red"}} onClick={() => showDeleteConfirm(record.id)}/>
			</Space>
		),
	}]

	return (
		<Dashboard>
			<div className='text-cente mb-3'>
                <h2 className='d-inline fs-4 fw-bold'>MANAGE ASSET CATEGORIES</h2>
                <div className='add-button'>
                    <Link to={`/asset-categories/add`}><Button type="primary">ADD</Button></Link>
                </div>
            </div>
			<Table bordered columns={columns} dataSource={data?.assetCategories.map(item => ({...item, key: item.id}))} pagination={false} />
		</Dashboard>
	)
}

export default AssetCategories