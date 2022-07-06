import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client";
import { Row, Col, Collapse } from 'antd';
import { GET_USER_BY_ID_QUERY } from '../../gql/Query/Users';
import Loader from "../../Components/UI/Loader";

const { Panel } = Collapse;

const UserDetails = () => {

    const { id } = useParams()
    const { loading, data } = useQuery(GET_USER_BY_ID_QUERY, {
        variables : { userByIdId : id }
    })

    if(loading){
       return <Loader />
    }

    console.log(data?.userById)

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
                        <h2 className='d-inline fs-6 fw-bolder text-muted'>ASSETS</h2>
                        {
                            data?.userById?.assetDetails?.map(asset => {
                                const {id, name, description, location, assetCategory, assetType, purchasedOn, assetCondition, assetStatus, reason, dateOfAssetAssignment} = asset
                                return (
                                    <Collapse key={id}>
                                        <Panel header={name} key={id}>
                                            { description && <p>Description : {description}</p>}
                                            { location && <p>Location : {location} </p>}
                                            { assetCategory && <p>Category : {assetCategory?.name} </p>}
                                            { assetType && <p>Type : {assetType?.name}</p>}
                                            { purchasedOn && <p>Purchased On : {purchasedOn} </p>}
                                            { assetCondition && <p>Condition : {assetCondition}</p>}
                                            { assetStatus && <p>Status : {assetStatus?.name}</p>}
                                            { reason && <p>Reason : {reason}</p>}
                                            { dateOfAssetAssignment &&<p>Date of Assetment : {dateOfAssetAssignment}</p>}
                                        </Panel>
                                    </Collapse>
                                )}
                            )
                        }
                    </div>
                </Col>
                <Col span={4}></Col>
            </Row>
        </div>
        </>
    )
}

export default UserDetails