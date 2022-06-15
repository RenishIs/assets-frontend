import { Link } from 'react-router-dom';
import { Space } from 'antd';

export const tableColumns = [
	{
		title: 'First Name',
		dataIndex: 'firstName',
		key: 'firstName',
		render: (text) => <span>{text}</span>,
	},
	{
		title: 'Last Name',
		dataIndex: 'lastName',
		key: 'lastName',
		render: (text) => <span>{text}</span>,
	},
	{
		title: 'Age',
		dataIndex: 'age',
		key: 'age',
	},
	{
		title: 'Action',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Link to={`/users/edit/${record.id}`}>Edit</Link>
				<Link to='/'>Delete</Link>
			</Space>
		),
	}
]