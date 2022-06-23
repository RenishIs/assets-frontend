import { Table, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { tableColumns } from './CONSTANTS';
import Dashboard from '../Dashboard';

const UsersListing = () => {

    const usersState = null

    const deleteUser = () => {}

    const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Link to={`/users/edit/${record.id}`}><Button type="primary">EDIT</Button></Link>
				<Button type="primary" danger onClick={() => deleteUser(record.id)}>DELETE</Button>
			</Space>
		),
	}]

    return (
        <Dashboard>
            <>
                <div>
                    <div>Manage Users</div>
                </div>
                <Table bordered columns={columns} dataSource={usersState?.data} pagination={false}/>
            </>
        </Dashboard>
    )
}

export default UsersListing