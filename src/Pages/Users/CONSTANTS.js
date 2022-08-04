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
		title: 'ROLE',
		dataIndex: 'role',
		key: 'role',
		render: (text) => <span>{text.name}</span>
	},
]