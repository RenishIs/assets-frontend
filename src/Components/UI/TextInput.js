import { useField } from 'formik';
import { Input } from 'antd';
import { Link } from 'react-router-dom';

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
                    <Link to='/user/forgot-password' className="fw-bolder text-end" style={{marginRight: '55px'}}>Forgot Password?</Link >
                )
            }
            </div>
            {
                isPassword ? (
                    <Input.Password className={`form-input`} size="large" {...field} {...props} />

                ) : (
                    <Input className={`form-input ${props.disabled && 'form-input-disabled'}`} size="large" {...field} {...props} />

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