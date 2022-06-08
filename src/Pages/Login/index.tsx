import { Button, Card } from "antd";
import { UserOutlined, KeyOutlined } from '@ant-design/icons';
import { useDispatch } from "react-redux";
import { Formik, Form } from 'formik';
import { loginUserStart } from "../../redux/actions/auth/login";
import TextInput from "../../Components/UI/TextInput";
import { loginValidations } from "../../Helper/ValidationSchema";

const Login = () => {

	const initialValues = { email : '', password : ''}
	const dispatch = useDispatch()

	const onFinish = (values: object) => {
		dispatch(loginUserStart(values))
	};

	return (
		<div className="form site-card-border-less-wrapper">
			<Card style={{ width: '45%' }}>
				<h3 className="text-center">Sign In</h3>
				<Formik initialValues={initialValues} validationSchema={loginValidations} onSubmit={(values) => onFinish(values)}>
					<Form >
						<TextInput label="EMAIL" name="email" type="email" id="email" prefix={<UserOutlined />}/>					
						<TextInput label="PASSWORD" name="password" type="password" id="password" prefix={<KeyOutlined />} isPassword={true}/>
						<div className="d-flex mt-4 flex-row-reverse">
							<Button type="primary" htmlType="submit">Login</Button>
						</div>
					</Form>
				</Formik>
			</Card>
		</div>
	)
}

export default Login