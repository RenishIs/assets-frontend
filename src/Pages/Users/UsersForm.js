import { Button, Card } from 'antd';
import { Formik, Form } from 'formik';
import TextInput from '../../Components/UI/TextInput';

const UsersForm = ({title, handleUser, ...rest}) => {

    const {user} = rest

    const initialState = {
        firstName : user ? user.firstName : '',
        lastName : user ? user.lastName : '',
    }

    return (
        <div className="form site-card-border-less-wrapper">
            <Card style={{ width: '45%' }}>
                <Formik initialValues={initialState} onSubmit={(values) => handleUser(values)}>
                    <Form>
                        <TextInput label="FIRST NAME" name="firstName" id="firstName" />	
                        <TextInput label="LAST NAME" name="lastName" id="lastName" />	
                        <div className="d-flex mt-4 flex-row-reverse">
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </div>				
                    </Form>
                </Formik>
            </Card>
        </div>
    )
}

export default UsersForm