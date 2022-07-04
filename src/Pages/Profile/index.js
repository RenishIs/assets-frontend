import Dashboard from "../Dashboard"
import { useQuery } from '@apollo/client';
import { GET_PROFILE_QUERY } from '../../gql/Query/Profile/index';
import { Row, Col } from 'antd';

const Profile = () => {

    const { data } = useQuery(GET_PROFILE_QUERY);
    
    return (
        <Dashboard>
            <div className='text-center mb-4'>
                <h2 className='d-inline fs-5 fw-bold'>PROFILE DETAILS</h2>
            </div>

            {data?.Profile &&
            <div>
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
                                <span className="text-body fw-bold">{data?.Profile?.username}</span>
                            </Col>
                        </Row>
                        <Row  className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Email :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{data?.Profile?.email}</span>
                            </Col>
                        </Row>
                        <Row  className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Role :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{data?.Profile?.role?.name}</span>
                            </Col>
                        </Row>
                        <Row  className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Contact Number :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{data?.Profile?.contactNo}</span>
                            </Col>
                        </Row>
                        <Row  className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Address :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{data?.Profile?.address}</span>
                            </Col>
                        </Row>
                    </div>
                    </Col>
                    <Col span={6}></Col>
                </Row>
            </div>}
        </Dashboard>

        // <Dashboard>
        //     <div className='text-start mb-4'>
        //         <h2 className='d-inline fs-5 fw-bold'>Profile Details</h2>
        //     </div>
        //     {data?.Profile &&
        //     <div className="">
        //         <img src="/user-1.png" alt="profile" width="10%"/>
        //         <div className="mt-4 text-start">
        //             <Row  className="mb-3">
        //                 <Col span={1}></Col>
        //                 <Col span={9} className="profile-card">
        //                     <div className="text-muted">Username</div> 
        //                     <div className="text-body fw-bold">{data?.Profile?.username}</div>
        //                 </Col>
        //                 <Col span={4}></Col>
        //                 <Col span={9} className="profile-card">
        //                     <div className="text-muted">Email</div> 
        //                     <div className="text-body fw-bold">{data?.Profile?.email}</div>
        //                 </Col>
        //                 <Col span={1}></Col>
        //             </Row>
        //             <Row  className="mb-3">
        //                 <Col span={1}></Col>
        //                 <Col span={9} className="profile-card">
        //                     <div className="text-muted">Role</div> 
        //                     <div className="text-body fw-bold">{data?.Profile?.role?.name}</div>
        //                 </Col>
        //                 <Col span={4}></Col>
        //                 <Col span={9} className="profile-card">
        //                     <div className="text-muted">Contact Number</div> 
        //                     <div className="text-body fw-bold">{data?.Profile?.contactNo}</div>
        //                 </Col>
        //                 <Col span={1}></Col>
        //             </Row>
        //             <Row  className="mb-3">
        //                 <Col span={1}></Col>
        //                 <Col span={9} className="profile-card">
        //                     <div className="text-muted">Address</div> 
        //                     <div className="text-body fw-bold">{data?.Profile?.address}</div>
        //                 </Col>
        //                 <Col span={4}></Col>
        //                 <Col span={9}>
                            
        //                 </Col>
        //                 <Col span={1}></Col>
        //             </Row>
        //         </div>
        //     </div>}
        // </Dashboard>
    )
}

export default Profile