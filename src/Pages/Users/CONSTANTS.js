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
		title: 'CONTACT NUMBER',
		dataIndex: 'contactNo',
		key: 'contactNo',
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
	},
]