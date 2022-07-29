import { Button } from 'antd';
import { Formik, Form, Field } from 'formik';
import TextInput from '../../Components/UI/TextInput';
import { ticketValidations } from '../../Helper/ValidationSchema';
import { UserOutlined } from '@ant-design/icons';
import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import Loader from '../../Components/UI/Loader';
import { useQuery } from '@apollo/client';
import { GET_TICKETS_STATUS_QUERY } from '../../gql/Query/TicketsStatus';
import { GET_EMPLOYEE_ASSETS_QUERY } from '../../gql/Query/Assets';

const TicketForm = ({title, handleTicket, loading, adminList, ...rest}) => {
    const { data } = useQuery(GET_TICKETS_STATUS_QUERY)
    const { ticket } = rest

    const { loading : employeeAssetsLoading, data : employeeAssets } = useQuery(GET_EMPLOYEE_ASSETS_QUERY, {
		variables : {
			status: null
		}
	})

    const empAssets = employeeAssets?.employeeAssets?.assets

    const initialState = {
        title : '',
        description : '',
        asset : '',
        status : '62d91c4cfe351881e925fa83'
    }

    return (
        <div>
            { loading || employeeAssetsLoading && <Loader />}
            <h2 className='text-center fs-4 fw-bold'>{ticket ? 'EDIT TICKET' : 'ADD TICKET'}</h2>
            <Formik initialValues={initialState} validationSchema={ticketValidations} onSubmit={(values) => handleTicket(values)}>
            {({
                touched,
                errors,
                values
            }) => {
                return (
                <Form>
                    <Row>
                        <Col span={12}>
                            <TextInput label="TITLE" name="title" id="title" prefix={<UserOutlined style={{color : 'black'}}/>} isLabel={true} />	
                        </Col>
                        <Col span={12}>
                            <div className='text-start ms-4 mb-1 mt-4'>
                                <label htmlFor="description" className="text-body text-start fs-6 fw-bold">DESCRIPTION</label>
                            </div>
                            <Field as="textarea" 
                                    name="description" 
                                    id="description"  
                                    rows={4}
                                    style={{height:"43px"}} 
                                    className="form-input">
                            </Field>
                            {
                                touched.description && errors.description ? (
                                    <div className="text-start ms-4 mb-0 fs-6 text-danger">{errors.description}</div>
                                ) : null
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <div className='text-start ms-4 mb-1 mt-4'>
                                <label htmlFor="asset" className="text-body text-start fs-6 fw-bold">ASSET</label>
                            </div>
                            <Field as="select" 
                                    name="asset" 
                                    id="asset"  
                                    style={{height:"43px"}} 
                                    className="form-input">
                                <option>Select Asset</option>
                                {
                                    empAssets?.map(item => (
                                        <option value={item.id} key={item.id}>{item.name}</option>
                                    ))
                                }
                            </Field>
                            {
                                touched.asset && errors.asset ? (
                                    <div className="text-start ms-4 mb-0 fs-6 text-danger">{errors.asset}</div>
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