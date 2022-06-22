
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { editUser, getSingleUser } from '../../redux/actions/users';
import UsersForm from './UsersForm';

const UsersEdit = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const { id } = useParams()

    const usersState = useSelector(state => state.users)

    const handleUser = (values) => {
        const formData = {updateUserId : id,  input: {...values} }
        dispatch(editUser(formData))
        setTimeout(() => history.push('/users'), 5000)
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