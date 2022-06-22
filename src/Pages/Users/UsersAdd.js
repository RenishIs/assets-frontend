import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addUser } from '../../redux/actions/users';
import UsersForm from './UsersForm';

const UsersAdd = () => {

    const dispatch = useDispatch()
    const history = useHistory()

    const handleUser = (values) => {
        const formData = {
            input: {...values}
        }
        dispatch(addUser(formData))
        setTimeout(() => history.push('/users'), 5000)
    }

    return (
       <UsersForm handleUser={handleUser}/>
    )
}

export default UsersAdd