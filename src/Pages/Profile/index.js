import { useQuery } from '@apollo/client';
import { GET_PROFILE_QUERY } from '../../gql/Query/Profile/index';
import { Row, Col, Table } from 'antd';
import Loader from '../../Components/UI/Loader';
import { GET_TICKETS_QUERY } from '../../gql/Query/Tickets';
import { GET_EMPLOYEE_ASSETS_QUERY } from '../../gql/Query/Assets';
import { tableColumns as ticketTableColumns } from '../Tickets/CONSTANTS';
import { tableColumns as assetTableColumns } from '../Assets/CONSTANTS';
import Cookies from 'js-cookie';

const Profile = () => {

    const role = Cookies.get('role')
    const { data : profile, loading : profileLoading } = useQuery(GET_PROFILE_QUERY);
    const { loading: ticketsLoading, data : tickets } = useQuery(GET_TICKETS_QUERY);
    const { loading : employeeAssetsLoading, data : employeeAssets } = useQuery(GET_EMPLOYEE_ASSETS_QUERY, {
		variables : {
			status: null
		}
	})

    return (
        <>
            { 
                (profileLoading || ticketsLoading || employeeAssetsLoading) && <Loader /> 
            }
            <div className='text-center mb-4'>
                <h2 className='d-inline fs-5 fw-bold'>PROFILE DETAILS</h2>
            </div>
            <div className='text-center'>
                <img src="/user-1.png" alt="profile" width="10%"/>
                <Row>
                    <Col span={8}></Col>
                    <Col span={10}>
                    <div className="mt-4 text-start">
                        <Row  className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Username :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{profile?.Profile?.firstName} {profile?.Profile?.lastName}</span>
                            </Col>
                        </Row>
                        <Row  className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Email :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{profile?.Profile?.email}</span>
                            </Col>
                        </Row>
                        <Row  className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Role :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{profile?.Profile?.role?.name}</span>
                            </Col>
                        </Row>
                        {profile?.Profile?.contactNo && <Row  className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Contact Number :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{profile?.Profile?.contactNo}</span>
                            </Col>
                        </Row>}
                        {profile?.Profile?.address && <Row  className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Address :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{profile?.Profile?.address}</span>
                            </Col>
                        </Row>}
                    </div>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </div>
            {role ==='employee' && <div>
                <div className='mt-5'>
                    <div className='text-center mb-3'>
                        <h2 className='d-inline fs-4 fw-bold'>TICKETS</h2>
                    </div>
                    <Table bordered 
                        columns={ticketTableColumns} 
                        dataSource={tickets?.employeeTickets.map(item => ({...item, key: item.id}))} 
                        pagination={false} 
                        />
                </div>
                <div className='mt-5'>
                    <div className='text-center mb-3'>
                        <h2 className='d-inline fs-4 fw-bold'>ASSETS</h2>
                    </div>
                    <Table bordered 
                        columns={assetTableColumns} 
                        dataSource={employeeAssets?.employeeAssets.map(item => ({...item, key: item.id}))} 
                        pagination={false} 
                        />
                </div>
            </div>}
            
        </>
    )
}

export default Profile