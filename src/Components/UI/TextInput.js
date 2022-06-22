import { useField } from 'formik';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const TextInput = ({label, forgotPassword=false, isPassword=false, ...props}) => {

    const [field, meta] = useField(props)

    return (
        <div className='mt-4 w-full'>
            <div className='d-flex justify-content-between text-mute'>
                <label htmlFor={props.id || props.name} className="text-muted fs-6 fw-bolder">{label}</label>
                { 
                    forgotPassword && (
                        <Link to='/forgot-password' className="text-primary fw-bolder">Forgot Password?</Link >
                    )
                }
            </div>
            {
                isPassword ? (
                    <Input.Password className={`text-input form-input`} 
                                    size="large" 
                                    {...field}
                                    {...props} 
                                    style={{ backgroundColor: "black", marginBottom: "15px" }} 
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                ) : (
                    <Input className={`text-input form-input`} size="large" {...field} {...props}  style={{ backgroundColor: "black", marginBottom: "15px" }}  />
                )
            }
            {
                meta.touched && meta.error ? (
                    <div className="text-danger">{meta.error}</div>
                ) : null
            }
        </div>
    )
}

export default TextInput