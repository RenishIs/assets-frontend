import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import TicketsStatusForm from './TicketsStatusForm';
import openNotificationWithIcon from '../../Helper/Notification';
import { CREATE_TICKETS_STATUS_MUTATION } from '../../gql/Mutation/TicketsStatus';
import { GET_TICKETS_STATUS_QUERY } from '../../gql/Query/TicketsStatus';

const TicketsStatusAdd = () => {
	const history = useHistory();
	const [addTicketsStatus, { data, loading }] = useMutation(CREATE_TICKETS_STATUS_MUTATION, {
		refetchQueries: [
			{ query: GET_TICKETS_STATUS_QUERY },
		]
	});

	if (data) {
		openNotificationWithIcon('addTicketsStatus','success', "Ticket status added successfully")
		history.push('/tickets-status');
	}

	const handleTicketsStatus = (values) => {
		addTicketsStatus({ variables: { input: { ...values } } });
	}

	return (
		<TicketsStatusForm handleTicketsStatus={handleTicketsStatus} loading={loading} />
	)
}

export default TicketsStatusAdd