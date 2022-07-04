export const tableColumns = [
	{
		title: 'NAME',
		dataIndex: 'name',
		key: 'name',
		render: (text) => <span style={{cursor:"pointer"}}>{text}</span>,
	},
	{
		title: 'DESCRIPTION',
		dataIndex: 'description',
		key: 'description',
		render: (text) => <span style={{cursor:"pointer"}}>{text}</span>,
	}
]