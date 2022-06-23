import { Table, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { tableColumns } from './CONSTANTS';
import Dashboard from '../Dashboard';

const AssetsListing = () => {

    const assetsState = null
    
    const deleteAsset = () => {}
    
    const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Link to={`/assets/edit/${record.id}`}><Button type="primary">EDIT</Button></Link>
				<Button type="primary" danger onClick={() => deleteAsset(record.id)}>DELETE</Button>
			</Space>
		),
	}]

    return (
        <Dashboard>
            <Table bordered columns={columns} dataSource={assetsState?.data?.Assets} pagination={false} />
        </Dashboard>
    )
}

export default AssetsListing