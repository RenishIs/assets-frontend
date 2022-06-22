import { Button } from "antd";
import { Form, Formik } from "formik";
import { KeyOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import TextInput from "../../Components/UI/TextInput";
import { resetPasswordValidations } from "../../Helper/ValidationSchema";
import { resetPassword } from "../../redux/actions/auth/resetPassword";
import AuthLayout from "../../Components/AuthLayout";

const ResetPassword = () => {

    const initialState = { oldPassword : '', newPassword : '', confirmPassword : ''}
    const dispatch = useDispatch()

    const onFinish = (values) => {
        const data = {
            password: values?.newPassword,
            id : '123'
        }
        dispatch(resetPassword(data))
    };

    return (
        <AuthLayout headerText="Reset Password">
            <Formik initialValues={initialState} validationSchema={resetPasswordValidations} onSubmit={values => onFinish(values)}>
                    <Form>
                        <TextInput label="New Password" type="password" name="newPassword" id="newPassword" prefix={<KeyOutlined />} isPassword={true}/>
                        <TextInput label="Confirm Password" type="password" name="confirmPassword" id="confirmPassword" prefix={<KeyOutlined />} isPassword={true}/>
                        <Button type="primary" className="auth-button" htmlType="submit">Submit</Button>
                    </Form>
                </Formik>
        </AuthLayout>
    )
}

export default ResetPassword