import { Button } from "antd";
import { Form, Formik } from "formik";
import { UserOutlined } from '@ant-design/icons';
import { useMutation } from "@apollo/client";
import TextInput from "../../Components/UI/TextInput";
import { forgotPasswordValidations } from "../../Helper/ValidationSchema";
import AuthLayout from "../../Components/AuthLayout";
import { RESET_PASSWORD_LINK } from "../../gql/Mutation/Auth";
import openNotificationWithIcon from "../../Helper/Notification";
import AuthLoader from "../../Components/UI/AuthLoader";
import { Link } from "react-router-dom";

const ForgotPassword = () => {

    const initialState = { email: '' }
    const [sendResetPasswordLink, { data, error, loading }] = useMutation(RESET_PASSWORD_LINK);

    const onFinish = (values: object) => {
        sendResetPasswordLink({
            variables: values,
        });
    }

    if (data?.sendResetPasswordLink?.message) {
        openNotificationWithIcon('forgotPassword', 'success', "Reset password link is sent to your registered e-mail id")

    }
    if (error) {
        openNotificationWithIcon('forgotPassword', 'error', error.message)
    }
    return (
        <AuthLayout headerText="Forgot Password?">
            <p className="auth-sub-heading">Please enter your registered email address.<br />We'll send instructions to help you reset your password</p>
            <Formik initialValues={initialState} validationSchema={forgotPasswordValidations} onSubmit={(values) => onFinish(values)}>
                <Form>
                    <div id="authForm">
                        <TextInput placeholder="Email" label="EMAIL" type="email" id="email" name="email" prefix={<UserOutlined style={{ color: 'white' }} />} />
                    </div>
                    <Button type="primary" className="auth-button" htmlType="submit" style={{ width: "90%" }}>
                        {loading ? <AuthLoader /> : 'Send reset Instructions'}
                    </Button>
                    <div> <Link to="/user/login" className="auth-text-inner">Back to Sign In</Link></div>
                </Form>
            </Formik>
        </AuthLayout>
    )
}

export default ForgotPassword