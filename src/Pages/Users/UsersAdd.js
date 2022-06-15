import { useDispatch } from 'react-redux';
import UsersForm from './UsersForm';

const UsersAdd = () => {

    const dispatch = useDispatch()

    const handleUser = (values) => {
        console.log(values)
    }

    return (
       <UsersForm handleUser={handleUser}/>
    )
}

export default UsersAdd