import { Link, useHistory } from 'react-router-dom';
import { Table, Button, Select } from 'antd';
import { tableColumns } from '../Tickets/CONSTANTS';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_TICKETS_QUERY } from '../../gql/Query/AllTickets';
import { GET_USERS_QUERY } from "../../gql/Query/Users"
import Loader from '../../Components/UI/Loader';
import Cookies from 'js-cookie';

const AllTicketsListing = () => {
    const role = Cookies.get('role')
	const { data : tickets, loading, refetch } = useQuery(GET_ALL_TICKETS_QUERY
		,{
        variables : {
			userId: null
		  }
    }
	)

	const { data : users } = useQuery(GET_USERS_QUERY)

	const handleChange = (value) => {
		console.log("value", value)
		refetch({ variables: { userId: { id: value } }})
	};
	
	return (
		<>
			{ loading && <Loader /> }
			<div className='text-center mb-3'>
                {console.log(tickets,users,'data')}
                <h2 className='d-inline fs-4 fw-bold'>MANAGE ALL TICKETS</h2>
				{
					role === "admin" && (
						<div className='add-button'>
							<Select defaultValue={true} style={{ width: 150, marginRight: 10 }} onChange={handleChange}>
							<option>Select User</option>
                                { 
                                users?.users.map(item => (
                                    <option value={item.id} key={item.id}>{`${item.firstName} ${item.lastName}`}</option>
                                ))
                                }
							</Select>
							
						</div>
					)
				}
            </div>
			<Table bordered 
			       columns={tableColumns} 
				   dataSource={tickets?.tickets.map(item => ({...item, key: item.id}))} 
				   pagination={false} 
				   />
		</>
	)
}

export default AllTicketsListing