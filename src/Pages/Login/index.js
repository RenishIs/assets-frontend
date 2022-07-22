import { Button } from "antd";
import { MailFilled, EyeInvisibleOutlined, EyeFilled } from '@ant-design/icons';
import { Formik, Form } from 'formik';
import { Link } from "react-router-dom";
import Cookies from 'js-cookie'
import TextInput from "../../Components/UI/TextInput";
import { loginValidations } from "../../Helper/ValidationSchema";
import AuthLayout from "../../Components/AuthLayout";
import { useMutation } from "@apollo/client";
import { LOGIN_USER_MUTATION } from "../../gql/Mutation/Auth";
import openNotificationWithIcon from "../../Helper/Notification";
import AuthLoader from "../../Components/UI/AuthLoader";
import { createBrowserHistory } from 'history'

const Login = () => {

	const history = createBrowserHistory({forceRefresh:true})
	const initialValues = { email: '', password: '' }
	const [loginUser, { data, error, loading }] = useMutation(LOGIN_USER_MUTATION);

	const onFinish = (values) => {
		loginUser({
			variables: values,
		});
	};

	if(error){
		openNotificationWithIcon('loginUserError', 'error', error.message)
	}

	if (data?.loginUser?.token) {
		const role = data?.loginUser?.user?.role?.name
		Cookies.set('token', data?.loginUser?.token)
		Cookies.set('user',data?.loginUser?.user?.firstName + `   `+ data?.loginUser?.user?.lastName)
		Cookies.set('role', data?.loginUser?.user?.role?.name)
		openNotificationWithIcon('loginUser', 'success', "LOGIN SUCCESSFUL")
		const directTo = role === 'admin' ? '/' : '/profile' 
		history.push(directTo);
	}

	return (
		<AuthLayout headerText="Sign In">
			<Formik initialValues={initialValues} validationSchema={loginValidations} onSubmit={(values) => onFinish(values)}>
				<Form >
					<div id="authForm">
						<TextInput placeholder="Email" label="EMAIL" name="email" type="email" id="email" prefix={<MailFilled style={{ color: 'white' }} />} isAuth={true}/>
						<TextInput placeholder="Password" label="PASSWORD" name="password" type="password" id="password" prefix={<img src="/icon-password-key.png" alt="password" />} 
						isPassword={true} forgotPassword={true}
						iconRender={(visible) => (visible ? <EyeFilled style={{color:"white", fontSize:"1rem"}}/> : <EyeInvisibleOutlined style={{color:"white" , fontSize:"1rem"}}/>)}
						/>
					</div>
					<Button type="primary" className="auth-button" htmlType="submit" style={{width:'90%'}}>
						{ loading ? <AuthLoader/> : 'Sign In' }
					</Button>
					<div className="auth-text">Don't have an account? <Link to="/user/signup" className="auth-text-inner">Sign Up</Link></div>
				</Form>
			</Formik>
		</AuthLayout>
	)
}

export default Login