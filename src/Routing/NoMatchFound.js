import { Card, Row, Col } from 'antd';

const NoMatchFound = () => {
    return (
        <Row className="margin-top">
            <Col xs={{ span: 12, offset: 6 }}>
                <Card>
                    <div className="card-body">
                        <div className="d-flex flex-column align-items-center justify-content-center">
                            <h2>Page not found</h2>
                        </div>
                    </div>
                </Card>
            </Col>
        </Row>
    )
}

export default NoMatchFound