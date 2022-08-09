import { useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { CREATE_TICKET_MUTATION } from '../../gql/Mutation/Tickets';
import { GET_TICKETS_QUERY } from '../../gql/Query/Tickets';
import { GET_USERS_BY_ROLE, GET_USER_ROLE } from '../../gql/Query/Users';
import TicketForm from './TicketForm';
import openNotificationWithIcon from '../../Helper/Notification';
import { GET_TICKETS_STATUS_QUERY } from '../../gql/Query/TicketsStatus';

const TicketAdd = () => {
	const history = useHistory();

	const [addTicket, { data: ticket, loading }] = useMutation(CREATE_TICKET_MUTATION, {
		refetchQueries: [
			{ query: GET_TICKETS_QUERY, variables : {page : 0} },
		]
	});
	const { data } = useQuery(GET_USER_ROLE);
	const { data : ticketStatus } = useQuery(GET_TICKETS_STATUS_QUERY)

	const { data: adminList } = useQuery(GET_USERS_BY_ROLE, {
		variables: {
			skip: !data,
			roleId: data?.role?.filter((item) => item.name == "admin")[0].id
		}
	});

	if (ticket) {
		openNotificationWithIcon('addTicket', 'success', "Ticket added successfully")
		history.push('/tickets');
	}

	const handleTicket = (values) => {
		const updatedValues = {
			...values,
			status : ticketStatus?.ticketStatus?.find(status => status.name?.toLowerCase() === 'new')?.id?.toString()
		}
		addTicket({ variables: { input: { ...updatedValues } } });
	}

	return (
		<TicketForm handleTicket={handleTicket} loading={loading} adminList={adminList} />
	)
}

export default TicketAdd