import { Button } from "antd";
import { Form, Formik } from "formik";
import { EyeInvisibleOutlined, EyeFilled } from '@ant-design/icons';
import { useMutation, useQuery } from "@apollo/client";
import TextInput from "../../Components/UI/TextInput";
import { resetPasswordValidations } from "../../Helper/ValidationSchema";
import AuthLayout from "../../Components/AuthLayout";
import { RESET_PASSWORD } from "../../gql/Mutation/Auth";
import openNotificationWithIcon from "../../Helper/Notification";
import { Link, useHistory, useParams } from "react-router-dom";
import AuthLoader from "../../Components/UI/AuthLoader";
import { TOKEN_CHECK } from "../../gql/Query/Auth";

const ResetPassword = () => {

    const history = useHistory();
    const initialState = { oldPassword: '', newPassword: '', confirmPassword: '' }

    const params = useParams();
    const { data: message, error: errorMessage } = useQuery(TOKEN_CHECK, {
        variables: {
            id: params.id,
            token: params.token
        }
    });
    const [resetPassword, { data, loading }] = useMutation(RESET_PASSWORD);

    const onFinish = (values) => {
        const data = {
            password: values?.newPassword,
            id: params.id,
            token: params.token
        }
        resetPassword({ variables: data });
    };
    if (data?.resetPassword?.message) {
        openNotificationWithIcon('resetPassword', 'success', "Reset password successful")
        history.push('/login');
    }

    return (
        <AuthLayout headerText="Reset Password">
            {!errorMessage ? <Formik initialValues={initialState} validationSchema={resetPasswordValidations} onSubmit={values => onFinish(values)}>
                <Form>
                    <div id="authForm">
                        <TextInput placeholder="New Password" label="New Password" type="password" name="newPassword" id="newPassword"
                            prefix={<img src="/icon-password-key.png" alt="password" />} isPassword={true}
                            iconRender={(visible) => (visible ? <EyeFilled style={{ color: "white", fontSize: "1rem" }} /> : <EyeInvisibleOutlined style={{ color: "white", fontSize: "1rem" }} />)} />
                        <TextInput placeholder="Confirm Password" label="Confirm Password" type="password" name="confirmPassword" id="confirmPassword"
                            prefix={<img src="/icon-password-key.png" alt="password" />} isPassword={true}
                            iconRender={(visible) => (visible ? <EyeFilled style={{ color: "white", fontSize: "1rem" }} /> : <EyeInvisibleOutlined style={{ color: "white", fontSize: "1rem" }} />)} />
                    </div>
                    <Button type="primary" className="auth-button" htmlType="submit" style={{ width: "90%" }}>
                        {loading ? <AuthLoader /> : 'Submit'}
                    </Button>
                </Form>

            </Formik> :
                <>
                    <p className="auth-sub-heading">Invalid Reset Password link.<br/>
                        This link is already used.</p>
                    <div> <Link to="/user/login" className="auth-text-inner">Back to Sign In</Link></div>
                </>
            }
        </AuthLayout >
    )
}

export default ResetPassword