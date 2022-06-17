import { Button, Card } from 'antd';
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
            <div className="form site-card-border-less-wrapper">
                <Card style={{ width: '45%' }}>
                    <h2 className='text-center'>{user ? 'EDIT USER' : 'ADD USER'}</h2>
                    <Formik initialValues={initialState} validationSchema={userValidations} onSubmit={(values) => handleUser(values)}>
                        <Form>
                            <TextInput label="USER NAME" name="username" id="username" />	
                            <TextInput label="EMAIL" name="email" id="email" type="email"/>	
                            <TextInput label="CONTACT NUMBER" name="contactNo" id="contactNo" />	
                            <TextInput label="ADDRESS" name="address" id="address" />
                            <TextInput label="ROLE" name="role" id="role" />	
                            <TextInput label="PASSWORD" name="password" id="password" type="password" isPassword={true}/>
                            <div className="d-flex mt-4 flex-row-reverse">
                                <Button type="primary" htmlType="submit">Submit</Button>
                            </div>				
                        </Form>
                    </Formik>
                </Card>
            </div>
        </Dashboard>
    )
}

export default UsersForm