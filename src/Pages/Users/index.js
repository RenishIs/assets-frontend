import { Table, Space, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { tableColumns } from './CONSTANTS';
import Dashboard from '../Dashboard';
import { GET_USERS_QUERY } from '../../gql/Query/Users';
import { DELETE_USER_MUTATION } from '../../gql/Mutation/Users';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

const UsersListing = () => {

    const { data } = useQuery(GET_USERS_QUERY)

    const [ DeleteUser, { error, data : deletedUser } ] = useMutation(DELETE_USER_MUTATION, {
        refetchQueries: [
			{ query: GET_USERS_QUERY },
		]
    }) 

    if(deletedUser){
        openNotificationWithIcon('userDelete', 'success', "USER DELETED SUCCESSFULLY")
    }
    if(error) {
		alert(error);	
	}

    const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
                <Link to={`/users/edit/${record.id}`}><EditFilled style={{color: "blue"}}/></Link>
				<DeleteFilled style={{color: "red"}} onClick={() => DeleteUser({ variables : { deleteUserId : record.id}})}/>
			</Space>
		),
	}]

    return (
        <Dashboard>
            <>
                {/* <div>
                    <div>Manage Users</div>
                </div> */}
                <div className='text-end mb-3'>
                    <Link to={`/users/add`}><Button type="primary">ADD</Button></Link>
                </div>
                <Table bordered columns={columns} dataSource={data?.Users} pagination={false} size={'middle'}/>
            </>
        </Dashboard>
    )
}

export default UsersListing