import { Button, Card } from "antd";
import { Form, Formik } from "formik";
import { KeyOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import TextInput from "../../Components/UI/TextInput";
import { resetPasswordValidations } from "../../Helper/ValidationSchema";
import { resetPassword } from "../../redux/actions/auth/resetPassword";

const ResetPassword = () => {

    const initialState = { oldPassword : '', newPassword : '', confirmPassword : ''}
    const dispatch = useDispatch()

    const onFinish = (values: object) => {
        dispatch(resetPassword(values))
    };

    return (
        <div className="form site-card-border-less-wrapper">
            <Card style={{ width: '45%' }}>
                <h3 className="text-center">Reset Password</h3>
                <Formik initialValues={initialState} validationSchema={resetPasswordValidations} onSubmit={values => onFinish(values)}>
                    <Form>
                        <TextInput label="Old Password" type="password" name="oldPassword" id="oldPassword" prefix={<KeyOutlined />}/>
                        <TextInput label="New Password" type="password" name="newPassword" id="newPassword" prefix={<KeyOutlined />}/>
                        <TextInput label="Confirm Password" type="password" name="confirmPassword" id="confirmPassword" prefix={<KeyOutlined />}/>
                        <div className="d-flex mt-4 flex-row-reverse">
							<Button type="primary" htmlType="submit">Reset Password</Button>
						</div>
                    </Form>
                </Formik>
            </Card>
        </div>
    )
}

export default ResetPassword