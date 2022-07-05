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
	},
	{
		title: 'LOCATION',
		dataIndex: 'location',
		key: 'location',
		render: (text) => <span style={{cursor:"pointer"}}>{text}</span>,
	},
	{
		title: 'CATEGORY',
		dataIndex: 'assetCategory',
		key: 'assetCategory',
		render: (text) => <span style={{cursor:"pointer"}}>{text.name}</span>,
	},
	{
		title: 'TYPE',
		dataIndex: 'assetType',
		key: 'assetType',
		render: (text) => <span style={{cursor:"pointer"}}>{text.name}</span>,
	},
	{
		title: 'PURCHASED ON',
		dataIndex: 'purchasedOn',
		key: 'purchasedOn',
		render: (text) => <span style={{cursor:"pointer"}}>{text}</span>,
	},
	{
		title: 'CONDITION',
		dataIndex: 'assetCondition',
		key: 'assetCondition',
		render: (text) => <span style={{cursor:"pointer"}}>{text}</span>,
	},
	{
		title: 'STATUS',
		dataIndex: 'assetStatus',
		key: 'assetStatus',
		render: (text) => <span style={{cursor:"pointer"}}>{text.name}</span>,
	},
	{
		title: 'REASON IF NOT AVAILABLE',
		dataIndex: 'reason',
		key: 'reason',
		render: (text) => <span style={{cursor:"pointer"}}>{text}</span>,
	},
	{
		title: 'EMPLOYEE ID',
		dataIndex: 'employeeId',
		key: 'employeeId',
		render: (text) => <span style={{cursor:"pointer"}}>{text.username}</span>,
	},
	{
		title: 'DATE OF ASSET ASSIGNMENT',
		dataIndex: 'dateOfAssetAssignment',
		key: 'dateOfAssetAssignment',
		render: (text) => <span style={{cursor:"pointer"}}>{text}</span>,
	},
]