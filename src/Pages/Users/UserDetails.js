import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client";
import { Row, Col } from 'antd';
import { GET_USER_BY_ID_QUERY } from '../../gql/Query/Users';
import Loader from "../../Components/UI/Loader";

const UserDetails = () => {

    const { id } = useParams()
    const { loading, data } = useQuery(GET_USER_BY_ID_QUERY, {
        variables : { userId : id }
    })

    if(loading){
       return <Loader />
    }

    return (
        <>
        <div className='text-center mb-4'>
            <h2 className='d-inline fs-5 fw-bold'>USER DETAILS</h2>
        </div>
        <div>
            <Row>
                <Col span={8}></Col>
                <Col span={12}>
                    <div className="mt-4 text-start">
                        <Row className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Username :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{data?.userById?.username}</span>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Email :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{data?.userById?.email}</span>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Contact Number :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{data?.userById?.contactNo}</span>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Address :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{data?.userById?.address}</span>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col span={12}>
                                <span className="text-muted">Type :</span> 
                            </Col>
                            <Col span={12}>
                                <span className="text-body fw-bold">{data?.userById?.__typename}</span>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col span={4}></Col>
            </Row>
        </div>
        </>
    )
}

export default UserDetails