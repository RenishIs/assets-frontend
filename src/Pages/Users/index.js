import React, { useState } from 'react';
import { Table, Space, Button, Modal, Tooltip, Select } from 'antd';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { EditFilled, DeleteFilled, EyeFilled } from '@ant-design/icons';
import Cookies from 'js-cookie';
import { tableColumns } from './CONSTANTS';
import { GET_USERS_QUERY, GET_USER_BY_ID_QUERY } from '../../gql/Query/Users/index';
import { DELETE_USER_MUTATION } from '../../gql/Mutation/Users/index';
import openNotificationWithIcon from '../../Helper/Notification';
import Loader from '../../Components/UI/Loader';
import { UPDATE_USER_MUTATION } from '../../gql/Mutation/Users';
import { Switch } from 'antd';

const confirm = Modal.confirm;
const { Option } = Select;


const UsersListing = () => {
	const role = Cookies.get('role')
	const [statusValue, setStatusValue] = useState(null);
	const [currentPage, setCurrentPage] = useState(0)
	const { loading, data, refetch } = useQuery(GET_USERS_QUERY, { variables: { status: null, page: 0 } })

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
	const [UpdateUser, { data: updatedUser, loading: editLoading }] = useMutation(UPDATE_USER_MUTATION, {
		refetchQueries: [
			{ query: GET_USERS_QUERY, variables: { status: null, page: 0 } }
		]
	})

	const [DeleteUser, { error, data: deletedUser, loading: deleteLoading }] = useMutation(DELETE_USER_MUTATION, {
		refetchQueries: [
			{ query: GET_USERS_QUERY, variables: { status: null, page: 0 } },
		]
	})
	if (updatedUser && updatedUser?.updateUser?.isActive) {
		openNotificationWithIcon('userDelete', 'success', "User activated successfully")
	}
	if (updatedUser && !updatedUser?.updateUser?.isActive) {
		openNotificationWithIcon('userDelete', 'success', "User deactivated successfully")
	}
	if (deletedUser) {
		openNotificationWithIcon('userDelete', 'success', "USER DELETED SUCCESSFULLY")
	}
	if (error) {
		alert(error);
	}

	const columns = [...tableColumns,
	{
		title: 'STATUS',
		dataIndex: 'isActive',
		key: 'isActive',
	
		render: (_, record) => (
			<Switch
				name="isActive"
				id="isActive"
				checkedChildren={"ACTIVE"}
				unCheckedChildren={"IN-ACTIVE"}
				defaultChecked={record.isActive}
				onChange={(checked) => {

					UpdateUser({
						variables: {
							updateUserId: record.id, input: {
								isActive: checked ? true : false
							}
						}
					})
				}}
			/>
		)
	},
	{
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
		setStatusValue(value)
		if (value === null) {
			refetch({ status: null, page: 0 })
		} else {
			refetch({ status: { isActive: value }, page: 0 })
		}
	};

	const handlePageChange = (page) => {
		setCurrentPage(page - 1)
		if (statusValue == null) {
			refetch({ status: null, page: page - 1 })
		} else {
			refetch({ status: { isActive: statusValue }, page: page - 1 })
		}
	}

	return (
		<>
			{(loading || deleteLoading) && <Loader />}
			<div className='text-center mb-3'>
				<h2 className='d-inline fs-4 fw-bold' style={{ marginLeft: '6.5rem' }}>MANAGE USERS</h2>
				{
					role === "admin" && (
						<div className='add-button'>
							<Select defaultValue={null} style={{ width: 120, marginRight: 10 }} onChange={handleChange}>
								<Option value={null} key={null}>All</Option>
								<Option value={true} key={true}>Active</Option>
								<Option value={false} key={false}>In-Active</Option>
							</Select>
							<Link to={`/users/add`}><Button type="primary">ADD</Button></Link>
						</div>
					)
				}
			</div>
			<Table bordered
				columns={columns}
				dataSource={data?.users?.users?.map(item => ({ ...item, key: item.id }))}
				pagination={{
					defaultCurrent: 1,
					defaultPageSize: 10,
					total: data?.users?.total,
					current: data?.users?.currentPage + 1,
					onChange: handlePageChange,
				}}
			/>

		</>
	)
}

export default UsersListing