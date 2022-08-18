export const tableColumns = [
	{
		title: 'USER NAME',
		dataIndex: 'firstName',
		key: 'firstName',
		sortDirections: ['descend', 'ascend'],
		sorter: (a, b) => a.firstName.localeCompare(b.firstName),
		render:  (_, record) => (<span>{record.firstName} {record.lastName}</span>)
	},
	{
		title: 'EMAIL',
		dataIndex: 'email',
		key: 'email',
		sortDirections: ['descend', 'ascend'],
		sorter: (a, b) => a.email.localeCompare(b.email),
		render: (text) => <span>{text}</span>,
	},
	{
		title: 'ROLE',
		dataIndex: 'role',
		key: 'role',
		sortDirections: ['descend', 'ascend'],
		sorter: (a, b) => a?.role?.name.localeCompare(b?.role?.name),
		render: (text) => <span>{text.name}</span>
	},
]