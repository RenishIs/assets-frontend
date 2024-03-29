import { Link, useHistory } from 'react-router-dom';
import { Table, Space, Button, Modal } from 'antd';
import { tableColumns } from './CONSTANTS';
import { useMutation, useQuery, useLazyQuery } from '@apollo/client';
import { GET_ASSETS_QUERY, GET_EMPLOYEE_ASSETS_QUERY } from '../../gql/Query/Assets';
import { DELETE_ASSET_MUTATION } from '../../gql/Mutation/Assets';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled, EyeFilled } from '@ant-design/icons';
import Loader from '../../Components/UI/Loader';
import { Tooltip } from 'antd';
import Cookies from 'js-cookie';
import { GENERATE_CSV_QUERY } from '../../gql/Query/GenerateCSV/index'
import { generateCSV } from '../../Helper/generateCSV';
import { GET_ASSET_CATEGORIES_QUERY } from '../../gql/Query/AssetCategories/index';
import { GET_ASSET_STATUS_QUERY } from '../../gql/Query/AssetStatus/index';
import { GET_ASSET_TYPES_QUERY } from '../../gql/Query/AssetTypes/index';

const confirm = Modal.confirm;

const AssetsListing = () => {

	const role = Cookies.get('role')

	const { loading: adminAssetsLoading, data: adminAssets, refetch: refetchAdminAssets } = useQuery(GET_ASSETS_QUERY, {
		variables: {
			status: null
		}
	})

	const { loading: employeeAssetsLoading, data: employeeAssets, refetch: refetchEmployeeAssets } = useQuery(GET_EMPLOYEE_ASSETS_QUERY, {
		variables: {
			status: null
		}
	})

	const [ generateAssetsCSV, { data : csvData } ] = useLazyQuery(GENERATE_CSV_QUERY, { variables: { table: 'assets'} })

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
				deleteAssets({ variables: { deleteAssetsId: id } })
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	}

	const [deleteAssets, { error, data: deletedAsset, loading: deleteLoading }] = useMutation(DELETE_ASSET_MUTATION, {
		refetchQueries: [
			{ query: GET_ASSETS_QUERY, variables: { status: null } },
			{ query: GET_ASSET_CATEGORIES_QUERY },
			{ query: GET_ASSET_STATUS_QUERY },
			{ query: GET_ASSET_TYPES_QUERY },
		]
	});

	if (deletedAsset) {
		openNotificationWithIcon('deleteAsset', 'success', "Asset deleted successfully")
	}
	if (error) {
		alert(error);
	}

	const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Tooltip title="Edit"><Link to="#" onClick={(e) => {
					e.stopPropagation();
					history.push(`/assets/edit/${record.id}`)
				}}><EditFilled style={{ color: "blue" }} /></Link></Tooltip>
				<Tooltip title="Delete"><DeleteFilled style={{ color: "red" }} onClick={(e) => showDeleteConfirm(e, record.id)} /></Tooltip>
				<Tooltip title="View"><Link to={`/assets/${record.id}`}><EyeFilled style={{ color: "green" }} /></Link></Tooltip>
			</Space>
		),
	}]

	const navigation = (id) => history.push(`/assets/${id}`)
	const handleCsv = () => generateCSV(generateAssetsCSV)

	const handlePageChange = (page) => {
		if (role === 'admin') {
			refetchAdminAssets({ status: null, page: page - 1 })
		}
		else {
			refetchEmployeeAssets({ status: null, page: page - 1 })
		}
	}

	return (
		<>
			{(adminAssetsLoading || employeeAssetsLoading || deleteLoading) && <Loader />}
			<div className='text-center mb-3'>
				<h2 className='d-inline fs-4 fw-bold'>MANAGE ASSETS</h2>
				{role === 'admin' && <div className='add-button'>
				<Button type="primary" style={{ marginRight: 10 }} onClick={handleCsv}>
					EXPORT
				</Button>
				{/* <a href={`${process.env.REACT_APP_BASE_URL}${csvData?.generateCSV?.outputString}`}><Button type="primary" style={{ marginRight: 10 }}>EXPORT</Button></a> */}
					<Link to={`/assets/add`}><Button type="primary">ADD</Button></Link>
				</div>}
			</div>
			<Table bordered
				columns={role === 'admin' ? columns : tableColumns}
				dataSource={role === 'admin' ? adminAssets?.assets?.assets?.map(item => ({ ...item, key: item.id })) : employeeAssets?.employeeAssets?.assets?.map(item => ({ ...item, key: item.id }))}
				pagination={{
					defaultCurrent: 1,
					defaultPageSize: 10,
					total: role === 'admin' ? adminAssets?.assets?.total : employeeAssets?.employeeAssets?.total,
					current: role === 'admin' ? adminAssets?.assets?.currentPage + 1 : employeeAssets?.employeeAssets?.currentPage + 1,
					onChange: handlePageChange
				}}
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