import { useField } from 'formik';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

const TextInput = ({label, forgotPassword=false, isPassword=false, ...rest}) => {

    const { isLabel, ...props } = rest
    const [field, meta] = useField(props)

    return (
        <div className='mt-4 w-full'>
            {
                isLabel && (
                    <label htmlFor={props.id || props.name} className="text-muted fs-6 fw-bolder">{label}</label>
            )}
            <div className='d-flex justify-content-end text-primary'>
            { 
                forgotPassword && (
                    <Link to='/forgot-password' className="fw-bolder text-end">Forgot Password?</Link >
                )
            }
            </div>
            {
                isPassword ? (
                    <Input.Password className={`text-input form-input`} 
                                    size="large" 
                                    {...field}
                                    {...props} 
                                    style={{backgroundColor:'#baccdb'}}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}/>
                ) : (
                    <Input className={`text-input form-input`} size="large" {...field} {...props} style={{backgroundColor:'#baccdb'}}/>
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