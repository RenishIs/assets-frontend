import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions/users';
import UsersForm from './UsersForm';

const UsersAdd = () => {

    const dispatch = useDispatch()

    const handleUser = (values) => {
        dispatch(addUser(values))
    }

    return (
       <UsersForm handleUser={handleUser}/>
    )
}

export default UsersAdd