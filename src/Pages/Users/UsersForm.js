import { Button } from 'antd';
import { UserOutlined, MailFilled, PhoneFilled} from '@ant-design/icons';
import { Formik, Form, Field } from 'formik';
import TextInput from '../../Components/UI/TextInput';
import { userValidations } from '../../Helper/ValidationSchema';
import Dashboard from '../Dashboard';
import { Row, Col } from 'antd';
import { KeyOutlined, EnvironmentFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const items=[
    {
        label: 'Admin',
        key: 'Admin',
    },
    {
        label: 'Employee',
        key: 'Employee',
    },
  ]

const UsersForm = ({title, handleUser, ...rest}) => {

    const {user} = rest

    const initialState = {
        username : user ? user.username : '',
        email : user ? user.email : '',
        contactNo : user ? user.contactNo : '',
        address : user ? user.address : '',
        role : user ? user.role : '',
        password : user ? user.password : ''
    }

    return (
        <Dashboard>
            <div>
                <h2 className='text-center fs-4 fw-bold'>{user ? 'EDIT USER' : 'ADD USER'}</h2>
                <Formik initialValues={initialState} validationSchema={userValidations} onSubmit={(values) => handleUser(values)}>
                    <Form>
                        <Row>
                            <Col span={12}>
                                <TextInput label="USERNAME" 
                                           name="username" 
                                           id="username" 
                                           prefix={<UserOutlined style={{color : 'black'}}/>} 
                                           isLabel={true}/>
                            </Col>
                            <Col span={12}>
                                <TextInput label="EMAIL" 
                                           name="email" 
                                           id="email" 
                                           type="email" 
                                           prefix={<MailFilled style={{color : 'black'}}/>} 
                                           isLabel={true}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                                <TextInput label="CONTACT NUMBER" 
                                           name="contactNo" 
                                           id="contactNo" 
                                           prefix={<PhoneFilled style={{color : 'black'}}/>} 
                                           isLabel={true}/>
                            </Col>
                            <Col span={12}>
                                <TextInput label="ADDRESS" 
                                           name="address" 
                                           id="address"  
                                           prefix={<EnvironmentFilled style={{color : 'black'}}/>}
                                           isLabel={true}/>
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
                                       style={{height:"43px"}} 
                                       className="form-input">
                                   {
                                    items.map(item => (
                                        <option value={item.label} key={item.key}>{item.label}</option>
                                    ))
                                   }
                                </Field>
                            </Col>
                            <Col span={12}>
                                <TextInput label="PASSWORD" 
                                           name="password" 
                                           id="password" 
                                           type="password" 
                                           isPassword={true} 
                                           isAuth={false} 
                                           disabled={user}
                                           prefix={<KeyOutlined/>}
                                           isLabel={true} />
                            </Col>
                        </Row>
                        <div className="d-flex mt-4 me-4 flex-row-reverse">
                            <Link to="/users"><Button type="primary">Back</Button></Link>
                            <Button type="primary" htmlType="submit" className='me-3'>Submit</Button>
                        </div>				
                    </Form>
                </Formik>
            </div>
        </Dashboard>
    )
}

export default UsersForm