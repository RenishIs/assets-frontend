import { Button } from 'antd';
import { Formik, Form, Field } from 'formik';
import TextInput from '../../Components/UI/TextInput';
import { ticketValidations } from '../../Helper/ValidationSchema';
import { UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Loader from '../../Components/UI/Loader';
import { GET_TICKET_STATUS } from '../../gql/Query/Tickets/index';
import { useQuery } from '@apollo/client';

const status=[
    {'id':'1', 'name': 'New'},
    {'id':'2', 'name': 'In-progress'},
    {'id':'3', 'name': 'Resolved'}
]

const TicketForm = ({title, handleTicket, loading, adminList, ...rest}) => {

    const { ticket } = rest
    const { data : ticketStatus } = useQuery(GET_TICKET_STATUS)

    const initialState = {
        title : '',
        description : '',
        assignedTo : '',
        status : ''
    }

    return (
        <div>
            { loading && <Loader />}
            <h2 className='text-center fs-4 fw-bold'>{ticket ? 'EDIT TICKET' : 'ADD TICKET'}</h2>
            <Formik initialValues={initialState} validationSchema={ticketValidations} onSubmit={(values) => handleTicket(values)}>
            {({
                touched,
                errors,
            }) => {
                return (
                <Form>
                    <Row>
                        <Col span={12}>
                            <TextInput label="TITLE" name="title" id="title" prefix={<UserOutlined style={{color : 'black'}}/>} isLabel={true} />	
                        </Col>
                        <Col span={12}>
                            <TextInput label="DESCRIPTION" name="description" id="description" prefix={<UserOutlined style={{color : 'black'}}/>} isLabel={true} />
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <div className='text-start ms-4 mb-1 mt-4'>
                                <label htmlFor="assignedTo" className="text-body text-start fs-6 fw-bold">ASSIGNED TO</label>
                            </div>
                            <Field as="select" 
                                    name="assignedTo" 
                                    id="assignedTo"  
                                    style={{height:"43px"}} 
                                    className="form-input">
                                <option>Select Admin</option>
                                {
                                adminList?.usersByRole?.map(item => (
                                    <option value={item.id} key={item.id}>{`${item.firstName} ${item.lastName}`}</option>
                                ))
                                }
                            </Field>
                            {
                                touched.assignedTo && errors.assignedTo ? (
                                    <div className="text-start ms-4 mb-0 fs-6 text-danger">{errors.assignedTo}</div>
                                ) : null
                            }
                        </Col>
                        <Col span={12}>
                            <div className='text-start ms-4 mb-1 mt-4'>
                                <label htmlFor="status" className="text-body text-start fs-6 fw-bold">STATUS</label>
                            </div>
                            <Field as="select" 
                                    name="status" 
                                    id="status"  
                                    style={{height:"43px"}} 
                                    className="form-input">
                                <option>Select Status</option>
                                {
                                ticketStatus?.ticketStatus?.map(item => (
                                    <option value={item.id} key={item.id}>{item.name}</option>
                                ))
                                }
                            </Field>
                            {
                                touched.status && errors.status ? (
                                    <div className="text-start ms-4 mb-0 fs-6 text-danger">{errors.status}</div>
                                ) : null
                            }
                        </Col>
                    </Row>
                    <div className="d-flex mt-4 me-4 flex-row-reverse">
                        <Link to="/tickets"><Button type="primary">Back</Button></Link>
                        <Button type="primary" htmlType="submit" className='me-3'>Submit</Button>
                    </div>				
                </Form>
                )
            }}
            </Formik>
        </div>
    )
}

export default TicketForm