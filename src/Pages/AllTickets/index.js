import { Table, Select } from 'antd';
import { tableColumns } from './CONSTANTS';
import { useQuery } from '@apollo/client';
import { GET_ALL_TICKETS_QUERY } from '../../gql/Query/AllTickets';
import { GET_USERS_BY_ROLE, GET_USER_ROLE } from "../../gql/Query/Users"
import Loader from '../../Components/UI/Loader';
import Cookies from 'js-cookie';


const AllTicketsListing = () => {

    const role = Cookies.get('role')

	const { data : tickets, loading, refetch } = useQuery(GET_ALL_TICKETS_QUERY,{ variables : { userId: null }})

    const  { data }= useQuery(GET_USER_ROLE);
	const { data : employeeList } = useQuery(GET_USERS_BY_ROLE, {
		variables: { 
			skip: !data, 
            roleId : data?.role?.filter((item) => item.name == "admin")[0].id
          }
	});

	const handleChange = (value) => {
		refetch({ userId: { id: value } })
	};
	
	return (
		<>
			{ loading && <Loader /> }
			<div className='text-center mb-3'>
                <h2 className='d-inline fs-4 fw-bold text-center'>MANAGE ALL TICKETS</h2>
				{
					role === "admin" && (
						<div className='add-button'>
							<Select defaultValue={true} style={{ width: 150 }} onChange={handleChange}>
							<option>Select User</option>
                                { 
                                employeeList?.usersByRole?.map(item => (
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