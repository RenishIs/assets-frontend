import { Button, Card } from "antd";
import { Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { UserOutlined } from '@ant-design/icons';
import TextInput from "../../Components/UI/TextInput";
import { forgotPasswordValidations } from "../../Helper/ValidationSchema";
import { forgotPassword } from "../../redux/actions/auth/forgotPassword";

const ForgotPassword = () => {

    const initialState ={email : ''}
    const dispatch = useDispatch()

    const onFinish = (values: object) => {
        dispatch(forgotPassword(values))
    };

    return (
        <div className="form site-card-border-less-wrapper">
            <Card style={{ width: '45%' }}>
                <h3 className="text-center">Forgot Password</h3>
                <Formik initialValues={initialState} validationSchema={forgotPasswordValidations} onSubmit={(values) => onFinish(values)}>
                    <Form>
                        <TextInput label="EMAIL" type="email" id="email" name="email" prefix={<UserOutlined />}/>
                        <div className="d-flex mt-4 flex-row-reverse">
							<Button type="primary" htmlType="submit">Reset Password</Button>
						</div>
                    </Form>
                </Formik>
            </Card>
        </div>
    )
}

export default ForgotPassword