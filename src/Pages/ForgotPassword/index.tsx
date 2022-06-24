import { Button } from "antd";
import { Form, Formik } from "formik";
import { UserOutlined } from '@ant-design/icons';
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import TextInput from "../../Components/UI/TextInput";
import { forgotPasswordValidations } from "../../Helper/ValidationSchema";
import AuthLayout from "../../Components/AuthLayout";
import { RESET_PASSWORD_LINK } from "../../gql/Mutation/Auth";
import openNotificationWithIcon from "../../Helper/Notification";

const ForgotPassword = () => {

	const history = useHistory();
    const initialState ={email : ''}
	const [sendResetPasswordLink,{ data }] = useMutation(RESET_PASSWORD_LINK);

    const onFinish = (values: object) => {
        sendResetPasswordLink({
			variables:values,
		  });
    }

	if (data?.sendResetPasswordLink?.message) {
        openNotificationWithIcon('forgotPassword', 'success', "Reset password link is sent to your Registered mail")
		history.push('/reset-password');
	}

    return (
        <AuthLayout headerText="Forgot Password?">
            <p className="auth-sub-heading">Please enter your registered email address.<br/>We'll send instructions to help you reset your password</p>
            <Formik initialValues={initialState} validationSchema={forgotPasswordValidations} onSubmit={(values) => onFinish(values)}>
                    <Form>
                        <TextInput label="EMAIL" type="email" id="email" name="email" prefix={<UserOutlined style={{color : 'white'}}/>}/>
                        <Button type="primary" className="auth-button" htmlType="submit">Send reset Instructions</Button>
                    </Form>
                </Formik>
        </AuthLayout>
    )
}

export default ForgotPassword