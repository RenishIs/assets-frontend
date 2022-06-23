import { Button } from "antd";
import { MailFilled } from '@ant-design/icons';
import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";
import TextInput from "../../Components/UI/TextInput";
import { loginValidations } from "../../Helper/ValidationSchema";
import AuthLayout from "../../Components/AuthLayout";
import { useMutation } from "@apollo/client";
import { LOGIN_USER_MUTATION } from "../../gql/Mutation/Auth";
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie'
const Login = () => {
	const history = useHistory();
	const initialValues = { email: '', password: '' }
	const [loginUser, { data }] = useMutation(LOGIN_USER_MUTATION,);
	const onFinish = (values: object) => {
		loginUser({
			variables: values,
		});
	};
	if (data?.loginUser?.token) {
	
		Cookies.set('token', data?.loginUser?.token)

		history.push('/dashboard');
	}
	return (
		<AuthLayout headerText="Sign In">
			<Formik initialValues={initialValues} validationSchema={loginValidations} onSubmit={(values) => onFinish(values)}>
				<Form >
					<TextInput label="EMAIL" name="email" type="email" id="email" prefix={<MailFilled style={{ color: 'white' }} />} />
					<TextInput label="PASSWORD" name="password" type="password" id="password" prefix={<img src="icon-password-key.png" alt="password" />} isPassword={true} forgotPassword={true} />
					<Button type="primary" className="auth-button" htmlType="submit">Sign In</Button>
					<span className="auth-text">Don't have an account?</span>
					<Link to="/" className="auth-text-inner">Sign Up</Link>
				</Form>
			</Formik>
		</AuthLayout>
	)
}

export default Login