import { useQuery } from '@apollo/client';
import { GET_PROFILE_QUERY } from '../../gql/Query/Profile/index';
import { Row, Col } from 'antd';
import Loader from '../../Components/UI/Loader';

const Profile = () => {

    const { data, loading } = useQuery(GET_PROFILE_QUERY);
    return (
        <>
            { 
                loading && <Loader /> 
            }
            <div className='text-center mb-4'>
                <h2 className='d-inline fs-5 fw-bold'>PROFILE DETAILS</h2>
            </div>
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
            </div>
        </>
    )
}

export default Profile