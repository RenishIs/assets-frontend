import { Table, Space, Button } from 'antd';
import { useMutation, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import Dashboard from '../Dashboard';
import { GET_ASSET_CATEGORIES_QUERY } from '../../gql/Query/AssetCategories';
import { DELETE_ASSET_CATEGORY_MUTATION } from '../../gql/Mutation/AssetCategories';
import openNotificationWithIcon from '../../Helper/Notification';

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

	const [ deleteAssetCategory, { data: deletedAssetCategory }] = useMutation(DELETE_ASSET_CATEGORY_MUTATION, {
		refetchQueries : [
			{ query : GET_ASSET_CATEGORIES_QUERY }
		]
	})

	if(deletedAssetCategory){
		openNotificationWithIcon('deleteAssetCategory', 'success', "ASSEt CATEGORY DELETED SUCCESSFULLY")
	}

	const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Link to={`/asset-categories/edit/${record.id}`}><Button type="primary">EDIT</Button></Link>
				<Button type="primary" danger onClick={() => deleteAssetCategory({ variables: { deleteAssetCategoryId: record.id } })}>DELETE</Button>
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
			<Table bordered columns={columns} dataSource={data?.assetCategories} pagination={false} />
		</Dashboard>
	)
}

export default AssetCategories