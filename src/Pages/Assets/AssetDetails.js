import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_ASSET_BY_ID_QUERY } from "../../gql/Query/Assets"
import { Row, Col, Tag } from 'antd';
import Loader from "../../Components/UI/Loader";
import moment from 'moment'
import Timeline from "../../Components/UI/Timeline";

const RowUI = ({label, ...rest}) => (
    <Row className="mb-3">
        <Col span={12}>
            <span className="text-muted">{label} :</span> 
        </Col>
        <Col span={12}>
            <span className="text-body fw-bold">
                {
                    label === 'Asset Status'? 
                        (rest?.value == 'Assigned') ? <Tag color="success">{rest?.value}</Tag> :
                        (rest?.value == 'Available') ? <Tag color="processing">{rest?.value}</Tag> :
                        (rest?.value == 'NotAvailable') && <Tag color="error">{rest?.value}</Tag> :
                    rest?.value
                } 
            </span>
        </Col>
    </Row>
)

const AssetDetails = () => {

    const { id } = useParams()
    const { data, loading } = useQuery(GET_ASSET_BY_ID_QUERY, {
		variables: { assetById: id }
	});
    const asset = data?.assetById

    return (
        <>
            { loading && <Loader /> }
            <div className='text-center mb-4'>
                <h2 className='d-inline fs-5 fw-bold'>ASSET DETAILS</h2>
            </div>
            <Row>
                <Col span={8}></Col>
                <Col span={12}>
                    <div className="mt-4 text-start">
                        <RowUI label="Name" value={asset?.name}/>
                        { 
                            asset?.description && (
                                <RowUI label="Description" value={asset?.description}/>
                            )
                        }
                        <RowUI label="Location" value={asset?.location}/>
                        <RowUI label="Asset Category" value={asset?.assetCategory?.name}/>
                        <RowUI label="Asset Type" value={asset?.assetType?.name}/>
                        {
                            asset?.purchasedOn && (
                                <RowUI label="Purchased On" value={moment(asset?.purchasedOn).format("MMMM Do YYYY")}/>
                            )
                        }
                        <RowUI label="Asset Condition" value={asset?.assetCondition}/>
                        <RowUI label="Asset Status" value={asset?.assetStatus?.name}/>
                        { 
                            asset?.reason && (
                                <RowUI label="Reason" value={asset?.reason}/>
                            )
                        }
                        <RowUI label="Employee" value={asset?.employeeId?.username}/>
                        {   asset?.dateOfAssetAssignment && (
                                <RowUI label="Date of Asset Assignment" value={moment(asset?.dateOfAssetAssignment).format("MMMM Do YYYY")}/>
                            )
                        }
                    </div>
                </Col>
                <Col span={4}></Col>
            </Row>
            <Timeline />
        </>
    )
}

export default AssetDetails