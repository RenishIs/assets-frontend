import { useField } from 'formik';
import { Input } from 'antd';

const TextInput = ({label, isPassword=false, ...props}) => {

    const { resetPassword, ...rest} = props
    const [field, meta] = useField(rest)

    return (
        <div className='mt-4'>
            <div className='d-flex justify-content-between text-mute'>
                <label htmlFor={rest.id || rest.name}>{label}</label>
                { 
                    isPassword && (
                        <span onClick={rest.resetPassword} className="text-primary">Forgot Password?</span >
                    )
                }
            </div>
            <Input className={`text-input`} size="large" {...field} {...rest}  />
            {
                meta.touched && meta.error ? (
                    <div className="text-danger">{meta.error}</div>
                ) : null
            }
        </div>
    )
}

export default TextInput