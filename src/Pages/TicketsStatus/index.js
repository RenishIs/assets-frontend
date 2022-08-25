import { Table, Space, Button, Modal } from 'antd';
import { Link } from 'react-router-dom';
import { tableColumns } from './CONSTANTS';
import { useMutation, useQuery } from '@apollo/client';
import openNotificationWithIcon from '../../Helper/Notification';
import { EditFilled, DeleteFilled } from '@ant-design/icons';
import Loader from '../../Components/UI/Loader';
import { Tooltip } from 'antd';
import { GET_TICKETS_STATUS_QUERY } from '../../gql/Query/TicketsStatus';
import { DELETE_TICKETS_STATUS_MUTATION } from '../../gql/Mutation/TicketsStatus';

const confirm = Modal.confirm;

const TicketsStatusListing = () => {

	const { loading, data } = useQuery(GET_TICKETS_STATUS_QUERY);

	const errorIfAssigned = () => {
		Modal.error({
		  title: 'This ticket status is being used!!',
		  content: 'You cannot delete this ticket status, if you want to then delete the ticket associated with the status',
		});
	  };
	
	const showDeleteConfirm = (id) => {
		const ticketSatusById=data?.ticketStatus.find(ticketStatus => ticketStatus.id === id)
		{
			ticketSatusById?.assigned 
			?
				errorIfAssigned()
			:
				confirm({
				title: 'Are you sure?',
				content: 'Do you really want to delete this Tickets Status? This process cannot be undone.',
				okText: 'Yes',
				okType: 'danger',
				cancelText: 'No',
				onOk() {
					deleteTicketsStatus({ variables:  { deleteTicketStatusId: id } } )
				},
				onCancel() {
					console.log('Cancel');
				},
				});
		}
	  }

	const [deleteTicketsStatus, { error, data : deletedTicketsStatus, loading : deleteLoading }] = useMutation(DELETE_TICKETS_STATUS_MUTATION, {
		refetchQueries: [
			{ query: GET_TICKETS_STATUS_QUERY },
		]
	});

	if(deletedTicketsStatus){
        openNotificationWithIcon('deleteTicketStatus', 'success', "Ticket status deleted successfully")
    }
	if(error) {
		alert(error);	
	}

	const columns = [...tableColumns, {
		title: 'ACTION',
		key: 'action',
		render: (_, record) => (
			<Space size="middle">
				<Tooltip title="Edit"><Link to={`/tickets-status/edit/${record.id}`}><EditFilled style={{color: "blue"}}/></Link></Tooltip>
				<Tooltip title="Delete"><DeleteFilled style={{color: "red"}} onClick={() => showDeleteConfirm(record.id)}/></Tooltip>
			</Space>
		),
	}]

	return (
		<>
			{ (loading || deleteLoading ) && <Loader /> }
			<div className='text-center mb-3'>
                <h2 className='d-inline fs-4 fw-bold'>MANAGE TICKETS STATUS</h2>
                <div className='add-button'>
                    <Link to={`/tickets-status/add`}><Button type="primary">ADD</Button></Link>
                </div>
            </div>
			<Table bordered 
			       columns={columns} 
				   dataSource={data?.ticketStatus.map(item => ({...item, key: item.id}))} 
				   pagination={false} />
		
		</>
	)
}

export default TicketsStatusListing