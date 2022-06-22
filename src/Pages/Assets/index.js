import { Table, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteAsset, getAssets } from '../../redux/actions/assets';
import { tableColumns } from './CONSTANTS';
import Dashboard from '../Dashboard';

const AssetsListing = () => {

    const dispatch = useDispatch()
    const assetsState = useSelector(state => state?.assets)
    const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Link to={`/assets/edit/${record.id}`}><Button type="primary">EDIT</Button></Link>
				<Button type="primary" danger onClick={() => dispatch(deleteAsset(record.id))}>DELETE</Button>
			</Space>
		),
	}]

    useEffect(() => {
        dispatch(getAssets())
    }, [dispatch])

    return (
        <Dashboard>
            <Table bordered columns={columns} dataSource={assetsState?.data} pagination={false} />
        </Dashboard>
    )
}

export default AssetsListing