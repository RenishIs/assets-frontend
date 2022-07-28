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
import { Switch } from 'antd';

const UsersForm = ({ title, handleUser, loading, ...rest }) => {

    const { user } = rest

    const { data } = useQuery(GET_USER_ROLE);
    const { data: assets } = useQuery(GET_ASSETS_QUERY)

    const initialState = {
        firstName: user ? user.firstName : '',
        lastName: user ? user.lastName : '',
        email: user ? user.email : '',
        employeeCode: user ? user.employeeCode : '',
        contactNo: user ? user.contactNo : '',
        address: user ? user.address : '',
        isActive: user ? user.isActive : true,
        role: user ? user.role.id : '',
        password: user ? 'Albiorix@123' : ''
    }


    // function for executing query doesn't return a promise



    return (
        <div>
            {loading && <Loader />}
            <h2 className='text-center fs-4 fw-bold'>{user ? 'EDIT USER' : 'ADD USER'}</h2>
            <Formik initialValues={initialState} validationSchema={userValidations} onSubmit={(values) => handleUser(values)}>
                {({
                    values,
                    touched,
                    errors,
                    setFieldValue
                }) => {

                    return (
                        <Form>
                            <Row>
                                <Col span={3}>
                                    {user &&
                                        <Switch
                                            name="isActive"
                                            id="isActive"
                                            style={{ float: 'right' }}
                                            checkedChildren={"ACTIVE"}
                                            unCheckedChildren={"IN-ACTIVE"}
                                            defaultChecked={initialState.isActive}
                                            onChange={(checked) => {
                                              
                                                setFieldValue("isActive", checked ? true : false);
                                            }}
                                        />
                                    }
                                </Col>
                            </Row>
                      
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
                                            disabled={user && user?.employeeCode}
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
                                                data?.role?.map(item => (
                                                    <option value={item.id} key={item.id}>{item?.name.charAt(0).toUpperCase() + item?.name.slice(1)}</option>
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