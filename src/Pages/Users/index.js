import { Table, Space, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { tableColumns } from './CONSTANTS';
import Dashboard from '../Dashboard';
import { GET_USERS_QUERY } from '../../gql/Query/Users/index';
import { DELETE_USER_MUTATION } from '../../gql/Mutation/Users/index';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled } from '@ant-design/icons';

const confirm = Modal.confirm;

const UsersListing = () => {

    const { data, loading : getLoading } = useQuery(GET_USERS_QUERY)

    const showDeleteConfirm = (id) => {
		confirm({
		  title: 'Are you sure?',
		  content: 'Do you really want to delete this User? This process cannot be undone.',
		  okText: 'Yes',
		  okType: 'danger',
		  cancelText: 'No',
		  onOk() {
			DeleteUser({ variables : { deleteUserId : id}})
		  },
		  onCancel() {
			console.log('Cancel');
		  },
		});
	}

    const [ DeleteUser, { error, data : deletedUser, loading : deleteLoading } ] = useMutation(DELETE_USER_MUTATION, {
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
				<DeleteFilled style={{color: "red"}} onClick={() => showDeleteConfirm(record.id)}/>
			</Space>
		),
	}]

    return (
        <Dashboard>
            <>
            <div className='text-cente mb-3'>
                <h2 className='d-inline fs-4 fw-bold'>MANAGE USERS</h2>
                <div className='add-button'>
                    <Link to={`/users/add`}><Button type="primary">ADD</Button></Link>
                </div>
            </div>
                <Table bordered 
				       columns={columns} 
					   dataSource={data?.users.map(item => ({...item, key: item.id}))} 
					   loading={getLoading || deleteLoading}
					   pagination={false}/>
            </>
        </Dashboard>
    )
}

export default UsersListing