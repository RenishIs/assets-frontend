import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { CREATE_TICKET_MUTATION } from '../../gql/Mutation/Tickets';
import { GET_TICKETS_QUERY } from '../../gql/Query/Tickets';
import TicketForm from './TicketForm';
import openNotificationWithIcon from '../../Helper/Notification';

const TicketAdd = () => {
	const history = useHistory();
	const [addTicket, { data, loading }] = useMutation(CREATE_TICKET_MUTATION, {
		refetchQueries: [
			{ query: GET_TICKETS_QUERY },
		]
	});

	if (data) {
		openNotificationWithIcon('addTicket','success', "TICKET ADDED SUCCESSFULLY")
		history.push('/tickets');
	}

	const handleTicket = (values) => {
		addTicket({ variables: { input: { ...values } } });
	}

	return (
		<TicketForm handleTicket={handleTicket} loading={loading}/>
	)
}

export default TicketAdd