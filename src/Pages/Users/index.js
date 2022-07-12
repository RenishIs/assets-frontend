import { Table, Space, Button, Modal, Tooltip, Select } from 'antd';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { EditFilled, DeleteFilled, EyeFilled } from '@ant-design/icons';
import Cookies from 'js-cookie';
import { tableColumns } from './CONSTANTS';
import { GET_USERS_QUERY } from '../../gql/Query/Users/index';
import { DELETE_USER_MUTATION } from '../../gql/Mutation/Users/index';
import openNotificationWithIcon from '../../Helper/Notification';
import Loader from '../../Components/UI/Loader';

const confirm = Modal.confirm;
const { Option } = Select;

const UsersListing = () => {

	const role = Cookies.get('role')
	const { loading, data , refetch } = useQuery(GET_USERS_QUERY, { variables: { status: null }})

	const showDeleteConfirm = (id) => {
		confirm({
			title: 'Are you sure?',
			content: 'Do you really want to delete this User? This process cannot be undone.',
			okText: 'Yes',
			okType: 'danger',
			cancelText: 'No',
			onOk() {
				DeleteUser({ variables: { deleteUserId: id } })
			},
			onCancel() {
				console.log('Cancel');
			},
		});
	}

	const [DeleteUser, { error, data: deletedUser, loading: deleteLoading }] = useMutation(DELETE_USER_MUTATION, {
		refetchQueries: [
			{ query: GET_USERS_QUERY },
		]
	})

	if (deletedUser) {
		openNotificationWithIcon('userDelete', 'success', "USER DELETED SUCCESSFULLY")
	}
	if (error) {
		alert(error);
	}

	const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				{
					role === 'admin' && (
						<>
							<Tooltip title="Edit"><Link to={`/users/edit/${record.id}`}><EditFilled style={{ color: "blue" }} /></Link></Tooltip>
							{/* <Tooltip title="Delete"><DeleteFilled style={{color: "red"}} onClick={() => showDeleteConfirm(record.id)}/></Tooltip> */}
						</>
					)
				}
				<Tooltip title="View"><Link to={`/users/${record.id}`}><EyeFilled style={{ color: "green" }} /></Link></Tooltip>
			</Space>
		),
	}]

	const handleChange = (value) => {
     //refetch({ variables: { status: { isActive: value } }})
	};

	return (
		<>
			{(loading || deleteLoading) && <Loader />}
			<div className='text-center mb-3'>
				<h2 className='d-inline fs-4 fw-bold'>MANAGE USERS</h2>
				{
					role === "admin" && (
							<div className='add-button'>
							<Select defaultValue={true} style={{ width: 120, marginRight: 10}} onChange={handleChange}>
									<Option value={true} key={true}>Active</Option>
									<Option value={false} key={false}>In-Active</Option>
								</Select>
								<Link to={`/users/add`}><Button type="primary">ADD</Button></Link>
							</div>
					)
				}
			</div>
			<Table bordered columns={columns} dataSource={data?.users.map(item => ({ ...item, key: item.id }))} pagination={false} />
		</>
	)
}

export default UsersListing