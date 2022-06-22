import { Button } from "antd";
import { MailFilled } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";
import { loginUserStart } from "../../redux/actions/auth/login";
import TextInput from "../../Components/UI/TextInput";
import { loginValidations } from "../../Helper/ValidationSchema";
import AuthLayout from "../../Components/AuthLayout";

const Login = () => {

	const initialValues = { email : '', password : ''}
	const dispatch = useDispatch()

	const onFinish = (values: object) => {
		dispatch(loginUserStart(values))
	};

	return (
		<AuthLayout headerText="Sign In">
			<Formik initialValues={initialValues} validationSchema={loginValidations} onSubmit={(values) => onFinish(values)}>
				<Form >
					<TextInput label="EMAIL" name="email" type="email" id="email" prefix={<MailFilled style={{color : 'white'}}/>} />		
					<TextInput label="PASSWORD" name="password" type="password" id="password" prefix={<img src="icon-password-key.png" alt="password"/>} isPassword={true} forgotPassword={true}/>		
					<Button type="primary" className="auth-button" htmlType="submit">Sign In</Button>
					<span className="auth-text">Don't have an account?</span>
					<Link to="/" className="auth-text-inner">Sign Up</Link>
				</Form>
			</Formik>
		</AuthLayout>
	)
}

export default Login