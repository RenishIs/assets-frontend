import Dashboard from "../Dashboard"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_ASSET_BY_ID_QUERY } from "../../gql/Query/Assets"
import { Row, Col } from 'antd';

const AssetDetails = () => {

    const { id } = useParams()

    const { data } = useQuery(GET_ASSET_BY_ID_QUERY, {
		variables: { assetId: id }
	});

    return (
    <Dashboard>
        <div className='text-center mb-4'>
            <h2 className='d-inline fs-5 fw-bold'>ASSET DETAILS</h2>
        </div>
        {data?.assetById &&
        <div>
            <Row>
                <Col span={8}></Col>
                <Col span={12}>
                <div className="mt-4 text-start">
                    <Row className="mb-3">
                        <Col span={12}>
                            <span className="text-muted">Name :</span> 
                        </Col>
                        <Col span={12}>
                            <span className="text-body fw-bold">{data?.assetById?.name}</span>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col span={12}>
                            <span className="text-muted">Description :</span> 
                        </Col>
                        <Col span={12}>
                            <span className="text-body fw-bold">{data?.assetById?.description}</span>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col span={12}>
                            <span className="text-muted">Location :</span> 
                        </Col>
                        <Col span={12}>
                            <span className="text-body fw-bold">{data?.assetById?.name}</span>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col span={12}>
                            <span className="text-muted">Asset Category :</span> 
                        </Col>
                        <Col span={12}>
                            <span className="text-body fw-bold">{data?.assetById?.name}</span>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col span={12}>
                            <span className="text-muted">Type :</span> 
                        </Col>
                        <Col span={12}>
                            <span className="text-body fw-bold">{data?.assetById?.__typename}</span>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col span={12}>
                            <span className="text-muted">Purchased On :</span> 
                        </Col>
                        <Col span={12}>
                            <span className="text-body fw-bold">{data?.assetById?.name}</span>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col span={12}>
                            <span className="text-muted">Asset Condition :</span> 
                        </Col>
                        <Col span={12}>
                            <span className="text-body fw-bold">{data?.assetById?.name}</span>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col span={12}>
                            <span className="text-muted">Status :</span> 
                        </Col>
                        <Col span={12}>
                            <span className="text-body fw-bold">{data?.assetById?.name}</span>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        <Col span={12}>
                            <span className="text-muted">Date of Asset Assignment :</span> 
                        </Col>
                        <Col span={12}>
                            <span className="text-body fw-bold">{data?.assetById?.name}</span>
                        </Col>
                    </Row>
                </div>
                </Col>
                <Col span={4}></Col>
            </Row>
        </div>}
    </Dashboard>
    )
}

export default AssetDetails