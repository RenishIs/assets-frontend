import { useQuery } from '@apollo/client';
import { Row, Col, Table } from 'antd';
import Cookies from 'js-cookie';
import { useHistory } from 'react-router-dom';
import { GET_PROFILE_QUERY } from '../../gql/Query/Profile/index';
import Loader from '../../Components/UI/Loader';
import { GET_TICKETS_QUERY } from '../../gql/Query/Tickets';
import { GET_EMPLOYEE_ASSETS_QUERY } from '../../gql/Query/Assets';
import { tableColumns as ticketTableColumns } from '../Tickets/CONSTANTS';
import { tableColumns as assetTableColumns } from '../Assets/CONSTANTS';

const RowUI = ({ label, value}) => (
    <Row className="mb-3">
        <Col span={4}/>
        <Col span={6}>
            <span className="text-muted">{label} :</span>
        </Col>
        <Col span={9}>
            <span className="text-body fw-bold">{value ? value : '' }</span>
        </Col>
        <Col span={5}/>
    </Row>
)

const Profile = () => {

    const history = useHistory()
    const role = Cookies.get('role')
    const { data: profile, loading: profileLoading } = useQuery(GET_PROFILE_QUERY);
    const { loading: ticketsLoading, data: tickets, refetch: refetchTicket } = useQuery(GET_TICKETS_QUERY, { variables: { page: 0 } });
    const { loading: employeeAssetsLoading, data: employeeAssets, refetch: refetchAsset } = useQuery(GET_EMPLOYEE_ASSETS_QUERY, {
        variables: {
            status: null,
            page: 0
        }
    })

    const handleTicketPageChange = (page) => {
        refetchTicket({ variables: { page: page - 1 } })
    }

    const handleAssetPageChange = (page) => {
        refetchAsset({ variables: { page: page - 1 } })
    }

    const navigation = (id) => history.push(`/assets/${id}`)
	
    return (
        <>
            {
                (profileLoading || ticketsLoading || employeeAssetsLoading) && <Loader />
            }
            <div className='text-center mb-4'>
                <h2 className='d-inline fs-5 fw-bold'>PROFILE DETAILS</h2>
            </div>
            <div className='text-center'>
                <img src="/user-1.png" alt="profile" width="10%" />
                <Row>
                    <Col span={8}/>
                    <Col span={10}>
                        <div className="mt-4 text-start">
                            <RowUI label="Username" value={profile && `${profile?.Profile?.firstName} ${profile?.Profile?.lastName}`} />
                            <RowUI label="Email" value={profile?.Profile?.email} />
                            <RowUI label="Role" value={profile?.Profile?.role?.name} />
                            {
                                profile?.Profile?.contactNo && <RowUI label="Contact Number" value={profile?.Profile?.contactNo} />
                            }
                            {
                                profile?.Profile?.address && <RowUI label="Address" value={profile?.Profile?.address} />
                            }
                        </div>
                    </Col>
                    <Col span={6}/>
                </Row>
            </div>
            {role === 'employee' && <div>
                <div className='mt-5'>
                    <div className='text-center mb-3'>
                        <h2 className='d-inline fs-4 fw-bold'>TICKETS</h2>
                    </div>
                    <Table bordered
                        columns={ticketTableColumns}
                        dataSource={tickets?.employeeTickets?.tickets?.map(item => ({ ...item, key: item.id }))}
                        pagination={{
                            defaultCurrent: 1,
                            defaultPageSize: 10,
                            total: tickets?.employeeTickets?.total,
                            current: tickets?.employeeTickets?.currentPage + 1,
                            onChange: handleTicketPageChange
                        }}
                    />
                </div>
                <div className='mt-5'>
                    <div className='text-center mb-3'>
                        <h2 className='d-inline fs-4 fw-bold'>ASSETS</h2>
                    </div>
                    <Table bordered
                        columns={assetTableColumns}
                        dataSource={employeeAssets?.employeeAssets?.assets?.map(item => ({ ...item, key: item.id }))}
                        pagination={{
                            defaultCurrent: 1,
                            defaultPageSize: 10,
                            total: employeeAssets?.employeeAssets?.total,
                            current: employeeAssets?.employeeAssets?.currentPage + 1,
                            onChange: handleAssetPageChange
                        }}
                        onRow={(record, rowIndex) => {
                            return {
                                onClick: (event) => navigation(record.id)
                            }
                        }}
                    />
                </div>
            </div>}

        </>
    )
}

export default Profile