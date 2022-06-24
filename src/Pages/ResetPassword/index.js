import { Button } from "antd";
import { Form, Formik } from "formik";
import { KeyOutlined } from '@ant-design/icons';
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import TextInput from "../../Components/UI/TextInput";
import { resetPasswordValidations } from "../../Helper/ValidationSchema";
import AuthLayout from "../../Components/AuthLayout";
import { RESET_PASSWORD } from "../../gql/Mutation/Auth";
import openNotificationWithIcon from "../../Helper/Notification";

const ResetPassword = () => {

	const history = useHistory();
    const initialState = { oldPassword : '', newPassword : '', confirmPassword : ''}
	const [resetPassword,{data}] = useMutation(RESET_PASSWORD);

    const onFinish = (values) => {
        const data = {
            password: values?.newPassword,
            id : '123'
        }
        resetPassword({ variables : data});
    };

	if (data?.sendResetPasswordLink?.message) {
        openNotificationWithIcon('resetPassword', 'success', "RESET PASSWORD SUCCESSFUL")
		history.push('/reset-password');
	}
    return (
        <AuthLayout headerText="Reset Password">
            <Formik initialValues={initialState} validationSchema={resetPasswordValidations} onSubmit={values => onFinish(values)}>
                    <Form>
                        <TextInput label="New Password" type="password" name="newPassword" id="newPassword" prefix={<KeyOutlined style={{color : 'white'}}/>} isPassword={true}/>
                        <TextInput label="Confirm Password" type="password" name="confirmPassword" id="confirmPassword" prefix={<KeyOutlined style={{color : 'white'}}/>} isPassword={true}/>
                        <Button type="primary" className="auth-button" htmlType="submit">Submit</Button>
                    </Form>
                </Formik>
        </AuthLayout>
    )
}

export default ResetPassword