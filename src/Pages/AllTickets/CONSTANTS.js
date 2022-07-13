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
							(text == 'New' || text == 'In-progress' || text == 'Resolved') 
							?
							(<span>
								{text == 'New' && <Tag color="cyan">{text}</Tag>}
								{text == 'In-progress' && <Tag color="processing">{text}</Tag>}
								{text == 'Resolved' && <Tag color="success">{text}</Tag>} 
							</span>) 
							:
							(<span><Tag color="purple">{text}</Tag></span>)
							}
						</span>,
	},
]
