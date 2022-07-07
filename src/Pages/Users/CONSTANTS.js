import { Tag } from 'antd';

export const tableColumns = [
	{
		title: 'USER NAME',
		dataIndex: 'username',
		key: 'username',
		render: (text) => <span>{text}</span>,
	},
	{
		title: 'EMAIL',
		dataIndex: 'email',
		key: 'email',
		render: (text) => <span>{text}</span>,
	},
	{
		title: 'IS ACTIVE',
		dataIndex: 'isActive',
		key: 'isActive',
		render: (_, record) => (
			<div>{record.isActive ? <Tag color="success">ACTIVE</Tag> : <Tag color="success">INACTIVE</Tag>}</div>
		)
	},
	{
		title: 'ROLE',
		dataIndex: 'role',
		key: 'role',
		render: (text) => <span>{text.name}</span>
	},
]