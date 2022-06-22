import { Button } from "antd";
import { UserOutlined, MailFilled} from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { Formik, Form } from 'formik';
import TextInput from "../../Components/UI/TextInput";
import { registerUserStart } from "../../redux/actions/auth/register";
import { registerValidations } from "../../Helper/ValidationSchema";
import { Link } from "react-router-dom";
import { Checkbox } from 'antd';
import AuthLayout from "../../Components/AuthLayout";

const Registration = () => {

	const initialValues = { username : '', email : '', password : ''}
	const dispatch = useDispatch()

	const onFinish = (values: object) => {
		dispatch(registerUserStart(values))
	};

	const onChange = (value: boolean) => {
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