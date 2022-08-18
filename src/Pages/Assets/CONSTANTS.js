import { Tag } from 'antd';


export const tableColumns = [
	{
		title: 'NAME',
		dataIndex: 'name',
		key: 'name',
		sortDirections: ['descend', 'ascend'],
		sorter: (a, b) => a.name.localeCompare(b.name),
		render: (_, record) => (
			<span className='cursor-pointer'>{record.name}</span>
		),
	},
	{
		title: 'CATEGORY',
		dataIndex: 'assetCategory',
		key: 'assetCategory',
		sortDirections: ['descend', 'ascend'],
		sorter: (a, b) => a?.assetCategory?.name.localeCompare(b?.assetCategory?.name),
		render: (text) => <span className='cursor-pointer'>{text?.name}</span>,
	},
	{
		title: 'TYPE',
		dataIndex: 'assetType',
		key: 'assetType',
		sortDirections: ['descend', 'ascend'],
		sorter: (a, b) => a?.assetType?.name.localeCompare(b?.assetType?.name),
		render: (text) => <span className='cursor-pointer'>{text?.name}</span>,
	},
	{
		title: 'STATUS',
		dataIndex: 'assetStatus',
		key: 'assetStatus',
			render: (text) => <span className='cursor-pointer'>
								{ 
									(text.name == 'In-stock' || text.name == 'New' || text.name == 'Assigned' || text.name == 'In-Repair' || text.name == 'Broken') 
									?
									(<span>
										{text.name == 'In-stock' && <Tag color="geekblue">{text?.name}</Tag>}
										{text.name == 'New' && <Tag color="cyan">{text?.name}</Tag>}
										{text.name == 'Assigned' && <Tag color="success">{text?.name}</Tag>}
										{text.name == 'In-Repair' && <Tag color="processing">{text?.name}</Tag>}
										{text.name == 'Broken' && <Tag color="error">{text?.name}</Tag>}
									</span>) 
									:
									(<span><Tag color="purple">{text?.name}</Tag></span>)
								}
							</span>
	},
	{
		title: 'EMPLOYEE',
		dataIndex: 'employeeId',
		key: 'employeeId',
		sortDirections: ['descend', 'ascend'],
		sorter: (a, b) => a?.employeeId?.firstName.localeCompare(b?.employeeId?.firstName),
		render:  (_, record) => (<span className='cursor-pointer'>{record.employeeId.firstName} {record.employeeId.lastName}</span>)
	}
]