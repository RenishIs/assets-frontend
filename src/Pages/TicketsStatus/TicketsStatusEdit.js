
import { useMutation, useQuery } from '@apollo/client';
import { useHistory, useParams } from 'react-router-dom';
import TicketsStatusForm from './TicketsStatusForm';
import openNotificationWithIcon from '../../Helper/Notification';
import Loader from '../../Components/UI/Loader';
import { GET_TICKETS_STATUS_BY_ID_QUERY, GET_TICKETS_STATUS_QUERY } from '../../gql/Query/TicketsStatus';
import { UPDATE_TICKETS_STATUS_MUTATION } from '../../gql/Mutation/TicketsStatus';

const TicketsStatusEdit = () => {
	const history = useHistory();
	const { id } = useParams();

	const { data, loading } = useQuery(GET_TICKETS_STATUS_BY_ID_QUERY, {
		variables: { ticketStatusByIdId: id }
	});

	const [updateTicketsStatus, { data : updatedData, loading : editLoading }] = useMutation(UPDATE_TICKETS_STATUS_MUTATION, {
		refetchQueries: [
			{ query: GET_TICKETS_STATUS_QUERY },
		]
	});

	const handleTicketsStatus = (values) => {
		updateTicketsStatus({ variables: { updateTicketStatusId: id, input: { ...values } } });
	}

	if (updatedData) {
		openNotificationWithIcon('editTicketsStatus','success', "TICKETS STATUS EDITED SUCCESSFULLY")
		history.push('/tickets-status');
	}
	if(loading){
        return <Loader />
    }
	return (
		<div>
			{
				data?.ticketStatusById && (
				<TicketsStatusForm handleTicketsStatus={handleTicketsStatus} ticketsStatus={data?.ticketStatusById} loading={editLoading}/>
				)
			}
		</div>
	)
}

export default TicketsStatusEdit