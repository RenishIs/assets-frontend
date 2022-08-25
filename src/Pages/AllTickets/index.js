import React, { useState } from 'react';
import { Table, Select, Button } from 'antd';
import { tableColumns } from './CONSTANTS';
import { useQuery } from '@apollo/client';
import { GET_ALL_TICKETS_QUERY } from '../../gql/Query/AllTickets';
import { GET_USERS_BY_ROLE, GET_USER_ROLE } from "../../gql/Query/Users"
import Loader from '../../Components/UI/Loader';
import Cookies from 'js-cookie';
import { GENERATE_CSV_QUERY } from '../../gql/Query/GenerateCSV/index'

const AllTicketsListing = () => {

	const role = Cookies.get('role')

	const [userValue, setUserValue] = useState(null);
	const [currentPage, setCurrentPage] = useState(0)

	const { data: tickets, loading, refetch } = useQuery(GET_ALL_TICKETS_QUERY, { variables: { input: null, page: 0 } })

	const { data } = useQuery(GET_USER_ROLE);
	const { data: employeeList } = useQuery(GET_USERS_BY_ROLE, {
		variables: {
			skip: !data,
			roleId: data?.role?.filter((item) => item.name == "employee")[0].id
		}
	});
	const { data : csvData } = useQuery(GENERATE_CSV_QUERY, { variables: { table: 'tickets'} })


	const handleChange = (value) => {
		setUserValue(value)
		refetch({
			page: currentPage,
			input: {
				status: null,
				userId: value
			}
		})

	};

	const handlePageChange = (page) => {
		setCurrentPage(page - 1)
		refetch({
			page: page - 1,
			input: {
				status: null,
				userId: userValue
			}
		})
	}

	return (
		<>
			{loading && <Loader />}
			<div className='text-center mb-3'>
				<h2 className='d-inline fs-4 fw-bold text-center' style={{ marginLeft: '6.5rem' }}>MANAGE ALL TICKETS</h2>
				{
					role === "admin" && (
						<div className='add-button'>
							
							<a href={`${process.env.REACT_APP_BASE_URL}${csvData?.generateCSV?.outputString}`}><Button type="primary" style={{ marginRight: 10 }}>EXPORT</Button></a>
							<Select defaultValue={null} style={{ width: 150 }} onChange={handleChange}>
								<option value={null} key={null}>All users</option>
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
				dataSource={tickets?.tickets?.tickets?.map(item => ({ ...item, key: item.id }))}
				pagination={{
					defaultCurrent: 1,
					defaultPageSize: 10,
					total: tickets?.tickets?.total,
					current: tickets?.tickets?.currentPage + 1,
					onChange: handlePageChange
				}}
			/>
		</>
	)
}

export default AllTicketsListing