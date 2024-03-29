import { useParams, useHistory } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_ASSET_BY_ID_QUERY } from "../../gql/Query/Assets"
import { Row, Col, Tag } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import Loader from "../../Components/UI/Loader";
import moment from 'moment'
import Timeline from "../../Components/UI/Timeline";

const RowUI = ({ label, ...rest }) => (
    <Row className="mb-3">

        <Col span={8} style={{
            justifyContent: "flex-start",
            display: "flex"
        }}>
            <span className="text-muted" >{label} :</span>
        </Col>
        <Col span={4}></Col>
        <Col span={4}></Col>
        <Col span={8} style={{
            justifyContent: "flex-start",
            display: "flex"
        }}>
            <span>
                {
                    (rest?.value == 'In-stock' || rest?.value == 'New' || rest?.value == 'Assigned' || rest?.value == 'In-Repair' || rest?.value == 'Broken')
                        ?
                        (<span>
                            {rest?.value == 'In-stock' && <Tag color="geekblue">{rest?.value}</Tag>}
                            {rest?.value == 'New' && <Tag color="cyan">{rest?.value}</Tag>}
                            {rest?.value == 'Assigned' && <Tag color="success">{rest?.value}</Tag>}
                            {rest?.value == 'In-Repair' && <Tag color="processing">{rest?.value}</Tag>}
                            {rest?.value == 'Broken' && <Tag color="error">{rest?.value}</Tag>}
                        </span>)
                        :
                        (<span className="text-body fw-bold">{rest?.value}</span>)
                }
            </span>
        </Col>

    </Row>
)

const AssetDetails = () => {

    const { id } = useParams()
    const history = useHistory()
    const { data, loading } = useQuery(GET_ASSET_BY_ID_QUERY, {
        variables: { assetById: id }
    });
    const asset = data?.assetById
    const navigateBack = () => history.push('/assets')

    return (
        <>
            {loading && <Loader />}
            {asset && <> <div className=' mb-4 '>
                <div className="pe-4" onClick={navigateBack}>
                    <LeftOutlined style={{ fontSize: '23px', marginBottom: '5px', cursor: "pointer" }} />
                </div>

            </div>

                <div className="justify-content-between align-items-center d-flex flex-column ">

                    <h2 className='fs-5 fw-bold'>ASSET DETAILS</h2>

                    <Row className="mt-4 text-center w-100">
                        <Col span={6}></Col>
                        <Col span={12} className="mt-4 text-start w-40">
                            <RowUI label="Name" value={asset?.name} />
                            <RowUI label="Asset ID" value={asset?.assetId} />
                            {
                                asset?.description && (
                                    <RowUI label="Description" value={asset?.description} />
                                )
                            }
                            <RowUI label="Location" value={asset?.location} />
                            <RowUI label="Asset Category" value={asset?.assetCategory?.name} />
                            <RowUI label="Asset Type" value={asset?.assetType?.name} />
                            {
                                asset?.purchasedOn && (
                                    <RowUI label="Purchased On" value={moment(asset?.purchasedOn).format("MMMM Do YYYY")} />
                                )
                            }
                            <RowUI label="Asset Condition" value={asset?.assetCondition} />
                            <RowUI label="Asset Status" value={asset?.assetStatus?.name} />
                            {
                                asset?.reason && (
                                    <RowUI label="Reason" value={asset?.reason} />
                                )
                            }
                            <RowUI label="Employee" value={asset?.employeeId?.firstName + `   ` + asset?.employeeId?.lastName} /></Col>
                        <Col span={6}></Col>
                    </Row>


                </div>


                <div style={{ background: 'rgba(0,0,0,0.1)' }}>
                    {
                        asset?.history?.length > 0 && <Timeline data={asset?.history} />
                    }
                </div></>}
        </>
    )
}

export default AssetDetails