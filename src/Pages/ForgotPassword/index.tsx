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

const ForgotPassword = () => {

    const initialState ={email : ''}
	const [sendResetPasswordLink,{ data, loading }] = useMutation(RESET_PASSWORD_LINK);

    const onFinish = (values: object) => {
        sendResetPasswordLink({
			variables:values,
		  });
    }

	if (data?.sendResetPasswordLink?.message) {
        openNotificationWithIcon('forgotPassword', 'success', "Reset password link is sent to your Registered mail")
	
	}

    return (
        <AuthLayout headerText="Forgot Password?">
            <p className="auth-sub-heading">Please enter your registered email address.<br/>We'll send instructions to help you reset your password</p>
            <Formik initialValues={initialState} validationSchema={forgotPasswordValidations} onSubmit={(values) => onFinish(values)}>
                    <Form>
                        <div id="authForm">
                            <TextInput label="EMAIL" type="email" id="email" name="email" prefix={<UserOutlined style={{color : 'white'}}/>}/>
                        </div>
                        <Button type="primary" className="auth-button" htmlType="submit" style={{width:"90%"}}>
                            { loading ? <AuthLoader /> : 'Send reset Instructions'}
                        </Button>
                    </Form>
                </Formik>
        </AuthLayout>
    )
}

export default ForgotPassword