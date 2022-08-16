import { isApolloError, useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { CREATE_USER_MUTATION } from '../../gql/Mutation/Users';
import { GET_USERS_QUERY } from '../../gql/Query/Users';
import openNotificationWithIcon from '../../Helper/Notification';
import UsersForm from './UsersForm';

const UsersAdd = () => {

    const history = useHistory();
    const [CreateUser, { data, error, loading }] = useMutation(CREATE_USER_MUTATION, {
        refetchQueries: [
            { query: GET_USERS_QUERY, variables: { status: null, page: 0 } }
        ]
    })

    const handleUser = async (values) => {
        delete values.isActive
        const { confirmPassword, ...rest } = values

        try {
            await CreateUser({ variables: { input: { ...rest } } })
        } catch (e) {
            let messageShown = false;
            if (isApolloError(e)) {
                for (const gqlError of e.graphQLErrors) {
                    if (gqlError.extensions?.code === 'BAD_USER_INPUT') {
                        if (gqlError.extensions.argumentName) {
                            openNotificationWithIcon('userUpdateError', 'error', `This  ${gqlError.extensions.argumentName} already exist`)
                            messageShown = true;
                        }
                    }
                }
            }
        }
    }

    if (data) {
        openNotificationWithIcon('userAdd', 'success', "User added successfully")
        history.push('/users')
    }

    return (
        <UsersForm handleUser={handleUser} loading={loading} />
    )
}

export default UsersAdd