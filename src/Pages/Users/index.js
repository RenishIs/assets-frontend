import { Table, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { tableColumns } from './CONSTANTS';
import Dashboard from '../Dashboard';
import { GET_USERS_QUERY } from '../../gql/Query/Users';
import { DELETE_USER_MUTATION } from '../../gql/Mutation/Users';
import openNotificationWithIcon from '../../Helper/Notification';

const UsersListing = () => {

    const { data } = useQuery(GET_USERS_QUERY)

    const [ DeleteUser, { error, data : deletedUser } ] = useMutation(DELETE_USER_MUTATION, {
        refetchQueries: [
			{ query: GET_USERS_QUERY },
		]
    }) 

    if(deletedUser){
        openNotificationWithIcon('success', "USER DELETED SUCCESSFULLY")
    }
    if(error) {
		alert(error);	
	}

    const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Link to={`/users/edit/${record.id}`}><Button type="primary">EDIT</Button></Link>
				<Button type="primary" danger onClick={() => DeleteUser({ variables : { deleteUserId : record.id}})}>DELETE</Button>
			</Space>
		),
	}]

    return (
        <Dashboard>
            <>
                <div>
                    <div>Manage Users</div>
                </div>
                <Table bordered columns={columns} dataSource={data?.Users} pagination={false}/>
            </>
        </Dashboard>
    )
}

export default UsersListing