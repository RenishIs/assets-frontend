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
			<div className={`${record.isActive ? 'text-danger' : 'text-primary'}`}>{record.isActive ? "ACTIVE" : "INACTIVE"}</div>
		)
	},
	{
		title: 'ADDRESS',
		dataIndex: 'address',
		key: 'address',
	},
	{
		title: 'ROLE',
		dataIndex: 'role',
		key: 'role',
		render: (text) => <span>{text.name}</span>
	},
]