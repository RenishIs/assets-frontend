import { Link, useHistory } from 'react-router-dom';
import { Table, Button } from 'antd';
import { tableColumns } from './CONSTANTS';
import { useMutation, useQuery } from '@apollo/client';
import { GET_TICKETS_QUERY } from '../../gql/Query/Tickets';
import Loader from '../../Components/UI/Loader';

const TicketsListing = () => {

	const { loading, data } = useQuery(GET_TICKETS_QUERY);

	const history = useHistory()
	
	return (
		<>
			{ loading && <Loader /> }
			<div className='text-center mb-3'>
                <h2 className='d-inline fs-4 fw-bold'>MANAGE TICKETS</h2>
                <div className='add-button'>
                    <Link to={`/tickets/add`}><Button type="primary">ADD</Button></Link>
                </div>
            </div>
			<Table bordered 
			       columns={tableColumns} 
				   dataSource={data?.employeeTickets.map(item => ({...item, key: item.id}))} 
				   pagination={false} 
				   />
		</>
	)
}

export default TicketsListing