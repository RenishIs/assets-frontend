import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { CREATE_USER_MUTATION } from '../../gql/Mutation/Users';
import { GET_USERS_QUERY } from '../../gql/Query/Users';
import openNotificationWithIcon from '../../Helper/Notification';
import UsersForm from './UsersForm';

const UsersAdd = () => {

    const history = useHistory();

    const [ CreateUser, { data, loading }] = useMutation(CREATE_USER_MUTATION, {
        refetchQueries : [
            {query : GET_USERS_QUERY}
        ]
    })

    const handleUser = (values) => {
        CreateUser({ variables : {input: {...values}}})
    }

    if(data){
        openNotificationWithIcon('userAdd', 'success', "USER ADDED SUCCESSFULLY")
        history.push('/users')
    }

    return (
       <UsersForm handleUser={handleUser} loading={loading}/>
    )
}

export default UsersAdd