import { useField } from 'formik';
import { Input } from 'antd';

const TextInput = ({label, isPassword=false, ...props}) => {
    const [field, meta] = useField(props);
    return (
        <div className='mt-4'>
            <div className='d-flex justify-content-between text-mute'>
                <label htmlFor={props.id || props.name}>{label}</label>
                { isPassword && <div onClick={props.resetPassword} className="text-primary">Forgot Password?</div >}
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