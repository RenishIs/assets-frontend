import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client";
import { Row, Col, Table } from 'antd';
import { GET_USER_BY_ID_QUERY } from '../../gql/Query/Users';
import Loader from "../../Components/UI/Loader";
import { tableColumns } from '../Assets/CONSTANTS';

const RowUI = ({label1, label2, loading, ...rest}) => (
    <Row className="mb-3">
        <Col span={12}>
            <Row span={24}>
                <div className="text-muted">{label1} : <span className="text-body fw-bold">{rest.value1}</span></div>
            </Row>
            </Col>
            <Col span={12}>
            <Row span={24}>
                <div className="text-muted">{label2} : <span className="text-body fw-bold">{rest.value2}</span></div>
            </Row>
        </Col>
    </Row>
)

const UserDetails = () => {

    const { id } = useParams()
    const { loading, data } = useQuery(GET_USER_BY_ID_QUERY, {
        variables : { userByIdId : id }
    })

    return (
        <>
            { loading && <Loader /> } 
            <div className='text-center mb-4'>
                <h2 className='d-inline fs-5 fw-bold'>USER DETAILS</h2>
            </div>
            <div className="mt-4">
                <RowUI label1="Username" 
                       value1={data?.userById?.username} 
                       label2="Email" 
                       value2={data?.userById?.email}
                       loading={loading}/>
                {
                    (data?.userById?.contactNo || data?.userById?.address) && (
                        <RowUI label1="Contact Number" 
                               value1={data?.userById?.contactNo} 
                               label2="Address" 
                               value2={data?.userById?.address}
                               loading={loading}/>
                    )
                }
            </div>
            <h2 className='d-inline fs-6 fw-bolder text-muted'>ASSETS</h2>
            {
                data?.userById?.assetDetails && (
                    <Table bordered 
                           columns={tableColumns} 
                           dataSource={data?.userById?.assetDetails?.map(item => ({...item, key: item.id}))} 
                           pagination={false}/>
                )
            }
        </>
    )
}

export default UserDetails