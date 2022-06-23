
import { useParams } from 'react-router-dom';
import UsersForm from './UsersForm';

const UsersEdit = () => {

    const { id } = useParams()

    const usersState = null

    const handleUser = (values) => {
        const formData = {updateUserId : id,  input: {...values} }
    }

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