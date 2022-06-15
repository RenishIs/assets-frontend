import { useState } from 'react';
import { Modal, Button, Card } from 'antd';
import { useHistory } from "react-router-dom";
import { Formik, Form } from 'formik';
import TextInput from '../../Components/UI/TextInput';

const UsersForm = ({title, handleUser, ...rest}) => {

    const initialState = {
        firstName : '',
        lastName : ''
    }

    const [isModalVisible, setIsModalVisible] = useState(true);
    const history = useHistory();
  
    const handleOk = () => {
        
    }

    const handleCancel = () => {
        setIsModalVisible(false);
        history.push('/users')
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