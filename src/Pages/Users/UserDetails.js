import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client";
import { Row, Col, Table } from 'antd';
import { GET_USER_BY_ID_QUERY } from '../../gql/Query/Users';
import Loader from "../../Components/UI/Loader";
import { tableColumns } from '../Assets/CONSTANTS';

const UserDetails = () => {

    const { id } = useParams()
    const { loading, data } = useQuery(GET_USER_BY_ID_QUERY, {
        variables : { userByIdId : id }
    })

    if(loading){
       return <Loader />
    }

    const {username, email, contactNo, address, assetDetails} = data?.userById
    return (
        <>
            <div className='text-center mb-4'>
                <h2 className='d-inline fs-5 fw-bold'>USER DETAILS</h2>
            </div>
            <div className="mt-4">
                <Row className="mb-3">
                    <Col span={12}>
                        <Row span={24}>
                            <div className="text-muted">Username : <span className="text-body fw-bold">{username}</span></div>
                        </Row>
                    </Col>
                    <Col span={12}>
                        <Row span={24}>
                            <div className="text-muted">Email : <span className="text-body fw-bold">{email}</span></div>
                        </Row>
                    </Col>
                </Row>
                <Row className={`${contactNo} || ${address } && 'mb-4'`}>
                {
                    contactNo && (
                        <Col span={12}>
                            <Row span={24}>
                                <div className="text-muted">Contact Number : <span className="text-body fw-bold">{contactNo}</span></div>
                            </Row>
                        </Col>
                    )
                }
                {
                    address && (
                        <Col span={12}>
                            <Row span={24}>
                                <div className="text-muted">Address : <span className="text-body fw-bold">{address}</span></div>
                            </Row>
                        </Col>
                    )
                }                    
                </Row>
            </div>
            <h2 className='d-inline fs-6 fw-bolder text-muted'>ASSETS</h2>
            {
                assetDetails && (
                    <Table bordered 
                           columns={tableColumns} 
                           dataSource={assetDetails?.map(item => ({...item, key: item.id}))} 
                           pagination={false}/>
                )
            }
        </>
    )
}

export default UserDetails