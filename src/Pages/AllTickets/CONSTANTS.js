import { Tag } from 'antd';

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
        render: (text) => <span>{text.firstName} {text.lastName}</span>
	},
    {
		title: 'RAISED BY',
		dataIndex: 'raisedBy',
		key: 'raisedBy',
        render: (text) => <span>{text.firstName} {text.lastName}</span>
	},
	{
		title: 'STATUS',
		dataIndex: 'status',
		key: 'status',
		render: (_, record) => (
			<span>
			{ 
				(record?.status?.name == 'New' || record?.status?.name == 'In-progress' || record?.status?.name == 'Resolved') 
				?
				(<span>
					{record?.status?.name == 'New' && <Tag color="cyan">{record?.status?.name}</Tag>}
					{record?.status?.name == 'In-progress' && <Tag color="processing">{record?.status?.name}</Tag>}
					{record?.status?.name == 'Resolved' && <Tag color="success">{record?.status?.name}</Tag>} 
				</span>) 
				:
				(<span><Tag color="purple">{record?.status?.name}</Tag></span>)
			}
			</span>
		)
	},
]
