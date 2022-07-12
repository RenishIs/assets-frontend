export const tableColumns = [
	{
		title: 'TITLE',
		dataIndex: 'title',
		key: 'title',
		render: (text) => <span>{text}</span>,
	},
	{
		title: 'DESCRIPTION',
		dataIndex: 'description',
		key: 'description',
		render: (text) => <span>{text}</span>,
	},
	{
		title: 'ASSIGNED TO',
		dataIndex: 'assignedTo',
		key: 'assignedTo',
        render: (text) => <span>{text.firstName}</span>
	},
	{
		title: 'STATUS',
		dataIndex: 'status',
		key: 'status',
		render: (text) => <span>{text}</span>
	},
]