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
		render: (text) => <span>
							{ 
							(text.name == 'New' || text.name == 'In-progress' || text.name == 'Resolved') 
							?
							(<span>
								{text.name == 'New' && <Tag color="cyan">{text.name}</Tag>}
								{text.name == 'In-progress' && <Tag color="processing">{text.name}</Tag>}
								{text.name == 'Resolved' && <Tag color="success">{text.name}</Tag>} 
							</span>) 
							:
							(<span><Tag color="purple">{text.name}</Tag></span>)
							}
						</span>,
	},
]
