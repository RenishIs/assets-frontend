import { Col, Row, Tag } from "antd"

const RowUI = ({label, value, status}) => {
    return (
        <Row  className="mb-3">
            <Col span={12}><span className="text-muted">{label} :</span> </Col>
            <Col span={12}>
            {
                status ? 
                    <span>
                        {value == 'New' && <Tag color="cyan">{value}</Tag>}
                        {value == 'In-progress' && <Tag color="processing">{value}</Tag>}
                        {value == 'Resolved' && <Tag color="success">{value}</Tag>} 
                    </span> 
                    : <span className="text-body fw-bold">{value}</span>                     
            }
            </Col>
        </Row>
    )
}

const TicketDetails = ({ data }) => {
    return (
        <Row>
            <Col span={4}></Col>
            <Col span={20}>
                <div className="mt-4 text-start">
                    <RowUI label="Title" value={data?.title}/>
                    <RowUI label="Ticket ID" value={data?.ticketId}/>
                    <RowUI label="Description" value={data?.description}/>
                    <RowUI label="Raised By" value={`${data?.raisedBy?.firstName} ${data?.raisedBy?.lastName}`}/>
                    <RowUI label="Ticket Status" value={data?.status?.name} status={true}/>
                    <RowUI label="Asset" value={data?.asset?.name}/>
                </div>
            </Col>
        </Row>
    )
}

export default TicketDetails