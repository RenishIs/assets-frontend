import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions/users';
import UsersForm from './UsersForm';

const UsersAdd = () => {

    const dispatch = useDispatch()

    const handleUser = (values) => {
        const formData = {
            input: {...values}
        }
        dispatch(addUser(formData))
    }

    return (
       <UsersForm handleUser={handleUser}/>
    )
}

export default UsersAdd