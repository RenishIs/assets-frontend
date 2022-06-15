import { Table } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../redux/actions/users';
import { tableColumns } from './CONSTANTS';

const UsersListing = () => {

    const dispatch = useDispatch()
    const users = useSelector(state => state?.users)

    useEffect(() => {
        dispatch(getUsers())
    }, [dispatch])

    return (
        <Table columns={tableColumns} dataSource={users?.data} />
    )
}

export default UsersListing