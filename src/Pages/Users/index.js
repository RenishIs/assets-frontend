import { Table, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser, getUsers } from '../../redux/actions/users';
import { tableColumns } from './CONSTANTS';
import Dashboard from '../Dashboard';

const UsersListing = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state?.users)

    const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Link to={`/users/edit/${record.id}`}><Button type="primary">EDIT</Button></Link>
				<Button type="primary" danger onClick={() => dispatch(deleteUser(record.id))}>DELETE</Button>
			</Space>
		),
	}]

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <Dashboard>
            <>
                <div>
                    <div>Manage Users</div>
                </div>
                <Table bordered columns={columns} dataSource={users?.data} pagination={false}/>
            </>
        </Dashboard>
    )
}

export default UsersListing