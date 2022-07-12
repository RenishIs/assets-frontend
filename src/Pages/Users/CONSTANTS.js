import { Tag } from 'antd';

export const tableColumns = [
	{
		title: 'USER NAME',
		dataIndex: 'firstName',
		key: 'firstName',
		render:  (_, record) => (<span>{record.firstName} {record.lastName}</span>)
	},
	{
		title: 'EMAIL',
		dataIndex: 'email',
		key: 'email',
		render: (text) => <span>{text}</span>,
	},
	{
		title: 'STATUS',
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