import { useParams, useHistory } from "react-router-dom"
import { useQuery } from "@apollo/client";
import { Row, Col, Table } from 'antd';
import Cookies from "js-cookie";
import { LeftOutlined } from '@ant-design/icons';
import { GET_USER_BY_ID_QUERY } from '../../gql/Query/Users';
import Loader from "../../Components/UI/Loader";
import { tableColumns } from '../Assets/CONSTANTS';
import { GET_ASSETS_QUERY } from '../../gql/Query/Assets';

const role = Cookies.get('role')

const RowUI = ({ label1, label2, loading, ...rest }) => (
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
    const history = useHistory()
    const { loading, data } = useQuery(GET_USER_BY_ID_QUERY, {
        variables: { userByIdId: id }
    })
    const user = data?.userById
    const { data : adminAssets, refetch : refetchAdminAssets } = useQuery(GET_ASSETS_QUERY, {
		variables : {
			status: null
		}
	})

    const navigation = (id) => history.push(`/assets/${id}`)
    const handlePageChange = (page) => refetchAdminAssets({ status: null, page: page-1 })
    const navigateBack = () => history.push('/users')

    return (
        <>
            {loading ? <Loader /> :
                <>
                    <div className='text-center mb-4 d-flex w-50 justify-content-between align-items-center'>
                        <div className="pe-4" onClick={navigateBack}>
                            <LeftOutlined style={{fontSize : '23px', marginBottom : '5px'}}/>
                        </div>
                        <h2 className='fs-5 fw-bold'>USER DETAILS</h2>
                    </div>

                    <div className="mt-4">
                        <RowUI label1="Username"
                            value1={user?.firstName + `   ` + user?.lastName}
                            label2="Email"
                            value2={user?.email}
                            loading={loading} />
                        {
                            (user?.contactNo || user?.address) && (
                                <RowUI label1="Contact Number"
                                    value1={user?.contactNo}
                                    label2="Address"
                                    value2={user?.address}
                                    loading={loading} />
                            )
                        }
                    </div>
                </>
            }
            {
                user?.assetDetails?.length > 0 && (
                    <>
                        <h2 className='d-inline fs-6 fw-bolder text-muted'>ASSETS</h2>
                        <Table bordered
                               columns={tableColumns}
                               dataSource={user?.assetDetails?.map(item => ({ ...item, key: item.id }))}
                               pagination={{ 
                                    defaultCurrent:1, 
                                    defaultPageSize: 10, 
                                    total:  adminAssets?.assets?.total , 
                                    current: adminAssets?.assets?.currentPage+1 , 
                                    onChange: handlePageChange
                                }}
                                onRow={(record, rowIndex) => {
                                    return {
                                        onClick: (event) => role === 'admin' && navigation(record.id)
                                    }
                            }} />
                    </>
                )
            }
        </>
    )
}

export default UserDetails