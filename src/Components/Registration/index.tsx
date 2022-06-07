import { Button, Card } from "antd";
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { Formik, Form } from 'formik';
import TextInput from "../UI/TextInput";
import { registerUserStart } from "../../redux/actions/auth/register";
import { registerValidations } from "../../Helper/ValidationSchema";
import { Link } from "react-router-dom";

const Registration = () => {

	const initialValues = { username : '', email : '', password : ''}
	const dispatch = useDispatch()

	const onFinish = (values: object) => {
		dispatch(registerUserStart(values))
	};

	return (
		<div className="form site-card-border-less-wrapper">
			<Card style={{ width: '45%' }}>
				<h3 className="text-center">Sign Up</h3>
				<Formik initialValues={initialValues} validationSchema={registerValidations} onSubmit={(values) => onFinish(values)}>
					<Form >
						<TextInput label="USERNAME" name="username" type="text" id="username" prefix={<UserOutlined />}/>						
						<TextInput label="EMAIL" name="email" type="email" id="email" prefix={<UserOutlined />}/>						
						<TextInput label="PASSWORD" name="password" type="password" id="password" prefix={<KeyOutlined />} />
						<div className="mt-2">Already have an account? <Link to="/login">Login</Link></div>
						<div className="d-flex mt-4 flex-row-reverse ">
							<Button type="primary" htmlType="submit">Sign Up</Button>
						</div>
					</Form>
				</Formik>
			</Card>
		</div>
	);
}

export default Registration;
