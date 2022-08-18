export const tableColumns = [
	{
		title: 'STATUS',
		dataIndex: 'name',
		key: 'name',
		sortDirections: ['descend', 'ascend'],
		sorter: (a, b) => a?.name.localeCompare(b?.name),
		render: (text) => <span>{text}</span>,
	}
]