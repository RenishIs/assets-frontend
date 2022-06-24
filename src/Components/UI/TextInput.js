import { useField } from 'formik';
import { Input } from 'antd';
import { Link } from 'react-router-dom';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

//#dae6f0

const TextInput = ({label, forgotPassword=false, isPassword=false, isAuth=false, ...rest}) => {

    const { isLabel, ...props } = rest
    const [field, meta] = useField(props)

    return (
        <div className='mt-4 w-full'>
            {
                isLabel && (
                    <div className='text-start ms-4 mb-1'>
                    <label htmlFor={props.id || props.name} className="text-body text-start fs-6 fw-bold">{label}</label>
                    </div>
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
                    <Input.Password className={`${isAuth ? 'form-input-auth ant-input-auth' : 'form-input ant-input-normal'}`} 
                                    size="large" 
                                    {...field}
                                    {...props} 
                                    // style={{backgroundColor:'#baccdb'}}
                                    iconRender={(visible) => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}
                                    />
                ) : (
                    <Input className={`${isAuth ? 'form-input-auth ant-input-auth' : 'form-input ant-input-normal'}`} size="large" {...field} {...props} 
                    // style={{backgroundColor:'#baccdb'}}
                    />
                )
            }
            {
                meta.touched && meta.error ? (
                    <div className="text-start ms-4 mb-0 fs-6 text-danger">{meta.error}</div>
                ) : null
            }
        </div>
    )
}

export default TextInput