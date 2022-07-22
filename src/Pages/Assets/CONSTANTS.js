import { Tag } from 'antd';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';

const role = Cookies.get('role')

export const tableColumns = [
	{
		title: 'NAME',
		dataIndex: 'name',
		key: 'name',
		render: (_, record) => (
			<span className={`${role === 'admin'  && 'cursor-pointer'}`}>{record.name}</span>
		),
	},
	{
		title: 'CATEGORY',
		dataIndex: 'assetCategory',
		key: 'assetCategory',
		render: (text) => <span className={`${role === 'admin'  && 'cursor-pointer'}`}>{text?.name}</span>,
	},
	{
		title: 'TYPE',
		dataIndex: 'assetType',
		key: 'assetType',
		render: (text) => <span className={`${role === 'admin'  && 'cursor-pointer'}`}>{text?.name}</span>,
	},
	{
		title: 'STATUS',
		dataIndex: 'assetStatus',
		key: 'assetStatus',
			render: (text) => <span className={`${role === 'admin'  && 'cursor-pointer'}`}>
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
		render:  (_, record) => (<span className={`${role === 'admin'  && 'cursor-pointer'}`}>{record.employeeId.firstName} {record.employeeId.lastName}</span>)
	}
]