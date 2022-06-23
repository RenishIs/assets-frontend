import { Button } from 'antd';
import { UserOutlined, MailFilled, PhoneFilled} from '@ant-design/icons';
import { Formik, Form } from 'formik';
import TextInput from '../../Components/UI/TextInput';
import { userValidations } from '../../Helper/ValidationSchema';
import Dashboard from '../Dashboard';

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
            <div className='main-card p-4'>
                    <h2 className='text-center'>{user ? 'EDIT USER' : 'ADD USER'}</h2>
                    <Formik initialValues={initialState} validationSchema={userValidations} onSubmit={(values) => handleUser(values)}>
                        <Form className=''>
                            <TextInput label="USER NAME" name="username" id="username" prefix={<UserOutlined style={{color : 'black'}}/>} isLabel={true}/>
                            <TextInput label="EMAIL" name="email" id="email" type="email" prefix={<MailFilled style={{color : 'black'}}/>} isLabel={true}/>
                            <TextInput label="CONTACT NUMBER" name="contactNo" id="contactNo" prefix={<PhoneFilled style={{color : 'black'}}/>} isLabel={true}/>
                            <TextInput label="ADDRESS" name="address" id="address" isLabel={true} prefix={<UserOutlined style={{color : 'black'}}/>}/>
                            <TextInput label="ROLE" name="role" id="role" isLabel={true} prefix={<UserOutlined style={{color : 'black'}}/>}/>
                            <TextInput label="PASSWORD" name="password" id="password" type="password" isPassword={true} isLabel={true} prefix={<img src="icon-password-key.png" alt="password" style={{color : 'black'}}/>}/>
                            <div className="d-flex mt-4 flex-row-reverse">
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </div>				
                        </Form>
                    </Formik>
            </div>
        </Dashboard>
    )
}

export default UsersForm