import { Table, Space, Button, Modal } from 'antd';
import { useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { GET_ASSET_CATEGORIES_QUERY } from '../../gql/Query/AssetCategories';
import { DELETE_ASSET_CATEGORY_MUTATION } from '../../gql/Mutation/AssetCategories';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import Loader from '../../Components/UI/Loader';
import { Tooltip } from 'antd';

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

	const { loading, data } = useQuery(GET_ASSET_CATEGORIES_QUERY);

	const errorIfAssigned = () => {
		Modal.error({
		  title: 'This asset category is already being used!!',
		  content: 'You cannot delete this asset category, if you want to then delete the asset associated with the category',
		});
	  };

	const showDeleteConfirm = (id) => {
		const assetCategory=data?.assetCategories.find(assetCategory => assetCategory.id === id)
		{
		assetCategory?.assigned 
		?
			errorIfAssigned()
		:
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
			})
	}
	  }

	const [ deleteAssetCategory, { data: deletedAssetCategory, loading : deleteLoading }] = useMutation(DELETE_ASSET_CATEGORY_MUTATION, {
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
				<Tooltip title="Edit"><Link to={`/asset-categories/edit/${record.id}`}><EditFilled style={{color: "blue"}}/></Link></Tooltip>
				<Tooltip title="Delete"><DeleteFilled style={{color: "red"}} onClick={() => showDeleteConfirm(record.id)}/></Tooltip>
			</Space>
		),
	}]

	return (
		<>
			{ (loading || deleteLoading ) && <Loader /> }
			<div className='text-center mb-3'>
                <h2 className='d-inline fs-4 fw-bold'>MANAGE ASSET CATEGORIES</h2>
                <div className='add-button'>
                    <Link to={`/asset-categories/add`}><Button type="primary">ADD</Button></Link>
                </div>
            </div>
			<Table bordered columns={columns} dataSource={data?.assetCategories.map(item => ({...item, key: item.id}))} pagination={false} />
		</>
	)
}

export default AssetCategories