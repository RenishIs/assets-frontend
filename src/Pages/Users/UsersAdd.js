import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { CREATE_USER_MUTATION } from '../../gql/Mutation/Users';
import { GET_USERS_QUERY } from '../../gql/Query/Users';

import UsersForm from './UsersForm';

const UsersAdd = () => {

    const history = useHistory();

    const [ CreateUser, { data }] = useMutation(CREATE_USER_MUTATION, {
        refetchQueries : [
            {query : GET_USERS_QUERY}
        ]
    })

    const handleUser = (values) => {
        CreateUser({ variables : {input: {...values}}})
    }

    if(data){
        history.push('/users')
    }

    return (
       <UsersForm handleUser={handleUser}/>
    )
}

export default UsersAdd