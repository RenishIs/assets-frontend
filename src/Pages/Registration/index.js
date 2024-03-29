import { Button } from "antd";
import { UserOutlined, MailFilled, EyeInvisibleOutlined, EyeFilled} from '@ant-design/icons';
import { Formik, Form } from 'formik';
import { useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import { Checkbox } from 'antd';
import TextInput from "../../Components/UI/TextInput";
import { registerValidations } from "../../Helper/ValidationSchema";
import AuthLayout from "../../Components/AuthLayout";
import { SIGNUP_USER_MUTATION } from "../../gql/Mutation/Auth";
import openNotificationWithIcon from "../../Helper/Notification";
import AuthLoader from "../../Components/UI/AuthLoader";

const Registration = () => {

	const history = useHistory();
	const initialValues = { firstName : '', lastName:'', email : '', password : ''}
	const [ registerUser, { data, error, loading }] = useMutation(SIGNUP_USER_MUTATION);

	const onFinish = (values) => {
		registerUser({
			variables:values,
		  });

	};

	if(error){
		openNotificationWithIcon('registerUserError', 'error', error.message)
	}

	if (data?.registerUser?.token) {
		openNotificationWithIcon('registerUser', 'success', "Registeration successful")
		history.push('/user/login');
	}

	const onChange = (value) => {
		console.log(`checked = ${value}`);
	};

	return (
		<AuthLayout headerText="Create your Account">
			<Formik initialValues={initialValues} validationSchema={registerValidations} onSubmit={(values) => onFinish(values)}>
				<Form>
					<div id="authForm">
						{/* <TextInput placeholder="Username" label="USERNAME" name="username" type="text" id="username" prefix={<UserOutlined style={{color : 'white'}}/>} />	 */}
						<TextInput placeholder="Firstname" label="FIRSTNAME" name="firstName" type="text" id="fisrtname" prefix={<UserOutlined style={{color : 'white'}}/>} />	
						<TextInput placeholder="Lastname" label="LASTNAME" name="lastName" type="text" id="lastname" prefix={<UserOutlined style={{color : 'white'}}/>} />	
						<TextInput placeholder="Email" label="EMAIL" name="email" type="email" id="email" prefix={<MailFilled style={{color : 'white'}} />}/>		
						<TextInput placeholder="Password" label="PASSWORD" name="password" type="password" id="password" prefix={<img src="/icon-password-key.png" alt="password"/>} 
						isPassword={true}
						iconRender={(visible) => (visible ? <EyeFilled style={{color:"white", fontSize:"1rem"}}/> : <EyeInvisibleOutlined style={{color:"white" , fontSize:"1rem"}}/>)}
						/>
					</div>		
					<Button type="primary" className="auth-button" htmlType="submit" style={{width:"90%"}}>
						{ loading ? <AuthLoader /> : 'Create my account' }
					</Button>
					<div className="auth-text">Already have an account? <Link to="/user/login" className="auth-text-inner">Sign In</Link></div>
					
				</Form>
			</Formik>
		</AuthLayout>
	);
}

export default Registration;