
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editUser, getSingleUser } from '../../redux/actions/users';
import UsersForm from './UsersForm';

const UsersEdit = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    const usersState = useSelector(state => state.users)

    const handleUser = (values) => {
        const formData = {updateUserId : id,  input: {...values} }
        dispatch(editUser(formData))
    }

    useEffect(() => {
        dispatch(getSingleUser(id))
    }, [dispatch, id])

    return (
        <div>
        {
            usersState?.user && (
                <UsersForm handleUser={handleUser} user={usersState?.user}/>
            )
        }
        </div>
    )
}

export default UsersEdit