import { useMutation, useQuery } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { CREATE_TICKET_MUTATION } from '../../gql/Mutation/Tickets';
import { GET_TICKETS_QUERY } from '../../gql/Query/Tickets';
import { GET_USERS_BY_ROLE, GET_USER_ROLE } from '../../gql/Query/Users';
import TicketForm from './TicketForm';
import openNotificationWithIcon from '../../Helper/Notification';

const TicketAdd = () => {
	const history = useHistory();

	const [addTicket, { data: ticket, loading }] = useMutation(CREATE_TICKET_MUTATION, {
		refetchQueries: [
			{ query: GET_TICKETS_QUERY },
		]
	});
	const { data } = useQuery(GET_USER_ROLE);


	const { data: adminList } = useQuery(GET_USERS_BY_ROLE, {
		variables: {
			skip: !data,
			roleId: data?.role?.filter((item) => item.name == "admin")[0].id
		}
	});

	if (ticket) {
		openNotificationWithIcon('addTicket', 'success', "TICKET ADDED SUCCESSFULLY")
		history.push('/tickets');
	}

	const handleTicket = (values) => {
		addTicket({ variables: { input: { ...values } } });
	}

	return (
		<TicketForm handleTicket={handleTicket} loading={loading} adminList={adminList} />
	)
}

export default TicketAdd