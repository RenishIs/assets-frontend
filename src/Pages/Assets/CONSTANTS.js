import { Tag } from 'antd';
import { Link } from 'react-router-dom';

export const tableColumns = [
	{
		title: 'NAME',
		dataIndex: 'name',
		key: 'name',
		render: (_, record) => (
			<Link to={`/assets/${record.id}`} style={{cursor:"pointer", color:'black'}}>{record.name}</Link>
		),
	},
	{
		title: 'CATEGORY',
		dataIndex: 'assetCategory',
		key: 'assetCategory',
		render: (text) => <span style={{cursor:"pointer"}}>{text?.name}</span>,
	},
	{
		title: 'TYPE',
		dataIndex: 'assetType',
		key: 'assetType',
		render: (text) => <span style={{cursor:"pointer"}}>{text?.name}</span>,
	},
	{
		title: 'STATUS',
		dataIndex: 'assetStatus',
		key: 'assetStatus',
			render: (text) => <span style={{cursor:"pointer"}}>
								{text.name == 'Assigned' && <Tag color="success">{text?.name}</Tag>}
								{text.name == 'Available' && <Tag color="processing">{text?.name}</Tag>}
								{text.name == 'NotAvailable' && <Tag color="error">{text?.name}</Tag>}
							</span>,
	},
	{
		title: 'EMPLOYEE',
		dataIndex: 'employeeId',
		key: 'employeeId',
		render:  (_, record) => (<span>{record.firstName} {record.lastName}</span>)
	}
]