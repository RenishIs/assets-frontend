import { Button } from "antd";
import { UserOutlined, MailFilled} from '@ant-design/icons';
import { Formik, Form } from 'formik';
import { useMutation } from "@apollo/client";
import { Link, useHistory } from "react-router-dom";
import { Checkbox } from 'antd';
import TextInput from "../../Components/UI/TextInput";
import { registerValidations } from "../../Helper/ValidationSchema";
import AuthLayout from "../../Components/AuthLayout";
import { SIGNUP_USER_MUTATION } from "../../gql/Mutation/Auth";
import openNotificationWithIcon from "../../Helper/Notification";

const Registration = () => {

	const history = useHistory();
	const initialValues = { username : '', email : '', password : ''}
	const [registerUser,{data}] = useMutation(SIGNUP_USER_MUTATION);

	const onFinish = (values:object) => {
		registerUser({
			variables:values,
		  });

	};

	if (data?.registerUser?.token) {
		openNotificationWithIcon('registerUser', 'success', "REGISTRATION SUCCESSFUL")
		history.push('/login');
	}

	const onChange = (value:boolean) => {
		console.log(`checked = ${value}`);
	};

	return (
		<AuthLayout headerText="Create your Account">
			<Formik initialValues={initialValues} validationSchema={registerValidations} onSubmit={(values) => onFinish(values)}>
				<Form >
					<TextInput label="USERNAME" name="username" type="text" id="username" prefix={<UserOutlined style={{color : 'white'}}/>} />	
					<TextInput label="EMAIL" name="email" type="email" id="email" prefix={<MailFilled style={{color : 'white'}} />}/>		
					<TextInput label="PASSWORD" name="password" type="password" id="password" prefix={<img src="icon-password-key.png" alt="password"/>} isPassword={true}/>		
					<Checkbox onChange={(e) => onChange(e.target.value)}>I agree to the Terms & Conditions</Checkbox>
					<Button type="primary" className="auth-button" htmlType="submit">Create my account</Button>
					<span className="auth-text">Already have an account?</span>
					<Link to="/login" className="auth-text-inner">Sign In</Link>
				</Form>
			</Formik>
		</AuthLayout>
	);
}

export default Registration;