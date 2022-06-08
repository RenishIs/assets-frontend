import { useField } from 'formik';
import { Input } from 'antd';
import { Link } from 'react-router-dom';

const TextInput = ({label, isPassword=false, ...props}) => {

    const [field, meta] = useField(props)

    return (
        <div className='mt-4'>
            <div className='d-flex justify-content-between text-mute'>
                <label htmlFor={props.id || props.name} className="text-muted">{label}</label>
                { 
                    isPassword && (
                        <Link to='/forgot-password' className="text-primary">Forgot Password?</Link >
                    )
                }
            </div>
            <Input className={`text-input`} size="large" {...field} {...props}  />
            {
                meta.touched && meta.error ? (
                    <div className="text-danger">{meta.error}</div>
                ) : null
            }
        </div>
    )
}

export default TextInput