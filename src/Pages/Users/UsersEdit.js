
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../redux/actions/users';
import UsersForm from './UsersForm';


const UsersEdit = () => {

    const dispatch = useDispatch()

    const handleUser = (values) => {
        console.log(values)
    }

    useEffect(() => {
        dispatch(addUser())
    }, [dispatch])

    return (
        <UsersForm handleUser={handleUser}/>
    )
}

export default UsersEdit