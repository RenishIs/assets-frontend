import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';
import { tableColumns } from './CONSTANTS';
import { useQuery } from '@apollo/client';
import { GET_TICKETS_QUERY } from '../../gql/Query/Tickets';
import Loader from '../../Components/UI/Loader';

const TicketsListing = () => {

	const { loading, data, refetch } = useQuery(GET_TICKETS_QUERY, { variables: { page: 0 } });

	const handlePageChange = (page) => {
		refetch({ variables: { page: page-1 } })
	}

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
				   dataSource={data?.employeeTickets?.tickets?.map(item => ({...item, key: item.id}))} 
				   pagination={{ defaultCurrent:1, 
					             defaultPageSize: 10, 
								 total: data?.employeeTickets?.total, 
								 current:data?.employeeTickets?.currentPage+1, 
								 onChange: handlePageChange}} 
			/>
		</>
	)
}

export default TicketsListing