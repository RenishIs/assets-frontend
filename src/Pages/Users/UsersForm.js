import { Button } from 'antd';
import { UserOutlined, MailFilled, PhoneFilled } from '@ant-design/icons';
import { Formik, Form, Field } from 'formik';
import TextInput from '../../Components/UI/TextInput';
import { userValidations } from '../../Helper/ValidationSchema';
import { Row, Col } from 'antd';
import { KeyOutlined, EnvironmentFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_USER_ROLE } from '../../gql/Query/Users/index';
import MultiSelect from '../../Components/UI/MultiSelect';
import { GET_ASSETS_QUERY } from '../../gql/Query/Assets';
import Loader from '../../Components/UI/Loader';
import { Status } from '../../Helper/constants';

const UsersForm = ({ title, handleUser, loading, ...rest }) => {

    const { user } = rest

    const { data } = useQuery(GET_USER_ROLE)
    const { data: assets } = useQuery(GET_ASSETS_QUERY)

    const initialState = {
        firstName: user ? user.firstName : '',
        lastName: user ? user.lastName : '',
        email: user ? user.email : '',
        employeeCode: user ? user.employeeCode : '',
        contactNo: user ? user.contactNo : '',
        address: user ? user.address : '',
        isActive: user ? user.isActive : '',
        role: user ? user.role.id : '',
        password: user ? 'Albiorix@123' : ''
    }

    return (
        <div>
            {loading && <Loader />}
            <h2 className='text-center fs-4 fw-bold'>{user ? 'EDIT USER' : 'ADD USER'}</h2>
            <Formik initialValues={initialState} validationSchema={userValidations} onSubmit={(values) => handleUser(values)}>
                {({
                    values,
                    touched,
                    errors
                }) => {
                    return (
                        <Form>
                            <Row>
                                <Col span={12}>
                                    <TextInput label="FIRSTNAME"
                                        name="firstName"
                                        id="firstName"
                                        prefix={<UserOutlined style={{ color: 'black' }} />}
                                        isLabel={true} />
                                </Col>
                                <Col span={12}>
                                    <TextInput label="LASTNAME"
                                        name="lastName"
                                        id="lastName"
                                        prefix={<UserOutlined style={{ color: 'black' }} />}
                                        isLabel={true} />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <TextInput label="EMAIL"
                                        name="email"
                                        id="email"
                                        type="email"
                                        prefix={<MailFilled style={{ color: 'black' }} />}
                                        isLabel={true} />
                                </Col>
                                <Col span={12}>
                                    <TextInput label="EMPLOYEE CODE"
                                        name="employeeCode"
                                        id="employeeCode"
                                        prefix={<UserOutlined style={{ color: 'black' }} />}
                                        isLabel={true} />
                                </Col>
                            </Row>
                            <Row>

                                <Col span={12}>
                                    <TextInput label="ADDRESS"
                                        name="address"
                                        id="address"
                                        prefix={<EnvironmentFilled style={{ color: 'black' }} />}
                                        isLabel={true} />
                                </Col>
                                <Col span={12}>
                                    <TextInput label="CONTACT NUMBER"
                                        name="contactNo"
                                        id="contactNo"
                                        prefix={<PhoneFilled style={{ color: 'black' }} />}
                                        isLabel={true} />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={12}>
                                    <div className='text-start ms-4 mb-1 mt-4'>
                                        <label htmlFor="role" className="text-body text-start fs-6 fw-bold">ROLE</label>
                                    </div>
                                    <Field as="select"
                                        name="role"
                                        id="role"
                                        style={{ height: "43px" }}
                                        className="form-input"
                                        disabled={user}>
                                        <option>Select Role</option>
                                        {
                                            data?.role.map(item => (
                                                <option value={item.id} key={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </Field>
                                    {
                                        touched.role && errors.role ? (
                                            <div className="text-start ms-4 mb-0 fs-6 text-danger">{errors.role}</div>
                                        ) : null
                                    }
                                </Col>
                                <Col span={12}>
                                    <TextInput label="PASSWORD"
                                        name="password"
                                        id="password"
                                        type="password"
                                        isPassword={true}
                                        isAuth={false}
                                        disabled={user}
                                        prefix={<KeyOutlined />}
                                        isLabel={true} />
                                </Col>
                            </Row>
                            {user && <Row>
                                <Col span={12}>
                                    <div className='text-start ms-4 mb-1 mt-4'>
                                        <label htmlFor="Status" className="text-body text-start fs-6 fw-bold">Status</label>
                                    </div>
                                    <Field as="select"
                                        name="isActive"
                                        id="isActive"
                                        style={{ height: "43px" }}
                                        className="form-input">
                                        <option>Select Status</option>
                                        {
                                            Status.map(item => (
                                                <option value={item.id} key={item.id}>{item.name}</option>
                                            ))
                                        }
                                    </Field>
                                    {
                                        touched.isActive && errors.isActive ? (
                                            <div className="text-start ms-4 mb-0 fs-6 text-danger">{errors.isActive}</div>
                                        ) : null
                                    }
                                </Col>
                            </Row>}
                            {/* <Row>
                        <Col span={12}>
                            <div className='text-start ms-4 mb-1 mt-4'>
                                <label htmlFor="role" className="text-body text-start fs-6 fw-bold">ROLE</label>
                            </div>
                            <Field name="assets"
                                   id="assets"  
                                   component={MultiSelect}
                                   style={{height:"50px"}} 
                                   options={assets?.assets}
                                    />
                        </Col>
                    </Row> */}
                            <div className="d-flex mt-4 me-4 flex-row-reverse">
                                <Link to="/users"><Button type="primary">Back</Button></Link>
                                <Button type="primary" htmlType="submit" className='me-3'>Submit</Button>
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default UsersForm