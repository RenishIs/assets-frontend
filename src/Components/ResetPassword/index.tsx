import { Button, Card } from "antd";
import { KeyOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from 'formik';
import TextInput from "../UI/TextInput";
import { yupValidations } from "../../Helper/ValidationSchema";
import { resetPassword } from "../../redux/actions/auth/resetPassword";

const ResetPassword = () => {
    const initialValues = { oldPassword : 'A@bhj4545', newPassword : 'B@bhj4545', confirmPassword : 'C@bhj4545'}
    const dispatch = useDispatch()
	const state = useSelector(state => state)

    const onFinish = (values: object) => {
        dispatch(resetPassword(values))
	};

    return (
        <div className="form site-card-border-less-wrapper">
            <Card style={{ width: '45%' }}>
                <h3 className="text-center">Change Password</h3>
                <Formik initialValues={initialValues} validationSchema={yupValidations} onSubmit={(values) => onFinish(values)}>
					<Form >
						<TextInput label="OLD PASSWWORD" name="oldPassword" type="password" id="oldPassword" placeholder="old password" prefix={<KeyOutlined />}/>						
						<TextInput label="NEW PASSWORD" name="newPassword" type="password" id="newPassword" placeholder="new password" prefix={<KeyOutlined />} />
                        <TextInput label="CONFRIM PASSWORD" name="confirmPassword" type="password" id="confirmPassword" placeholder="confirm password" prefix={<KeyOutlined />} />
                        <div className="d-flex mt-4 flex-row-reverse">
                            <Button type="primary" htmlType="submit">Submit</Button>
						</div>
					</Form>
				</Formik>
            </Card>
        </div>
    )
}

export default ResetPassword