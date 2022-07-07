import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_ASSET_BY_ID_QUERY } from "../../gql/Query/Assets"
import { Row, Col } from 'antd';
import Loader from "../../Components/UI/Loader";
import moment from 'moment'

const RowUI = ({label, ...rest}) => (
    <Row className="mb-3">
        <Col span={12}>
            <span className="text-muted">{label} :</span> 
        </Col>
        <Col span={12}>
            <span className="text-body fw-bold">{rest?.value}</span>
        </Col>
    </Row>
)

const AssetDetails = () => {

    const { id } = useParams()

    const { data, loading } = useQuery(GET_ASSET_BY_ID_QUERY, {
		variables: { assetById: id }
	});

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
                        <RowUI label="Name" value={data?.assetById?.name}/>
                        { 
                            data?.assetById?.description && (
                                <RowUI label="Description" value={data?.assetById?.description}/>
                            )
                        }
                        <RowUI label="Location" value={data?.assetById?.location}/>
                        <RowUI label="Asset Category" value={data?.assetById?.assetCategory?.name}/>
                        <RowUI label="Asset Type" value={data?.assetById?.assetType?.name}/>
                        {
                            data?.assetById?.purchasedOn && (
                                <RowUI label="Purchased On" value={moment(data?.assetById?.purchasedOn).format("Do MM YYYY")}/>
                            )
                        }
                        <RowUI label="Asset Condition" value={data?.assetById?.assetCondition}/>
                        <RowUI label="Asset Status" value={data?.assetById?.assetStatus?.name}/>
                        { 
                            data?.assetById?.reason && (
                                <RowUI label="Reason" value={data?.assetById?.reason}/>
                            )
                        }
                        <RowUI label="Employee" value={data?.assetById?.employeeId?.username}/>
                        {   data?.assetById?.dateOfAssetAssignment && (
                                <RowUI label="Date of Asset Assignment" value={moment(data?.assetById?.dateOfAssetAssignment).format("MMMM Do YYYY")}/>
                            )
                        }
                    </div>
                </Col>
                <Col span={4}></Col>
            </Row>
        </>
    )
}

export default AssetDetails