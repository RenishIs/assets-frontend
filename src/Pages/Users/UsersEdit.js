
import { useParams, useHistory } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import UsersForm from './UsersForm';
import { GET_USERS_QUERY, GET_USER_BY_ID_QUERY } from '../../gql/Query/Users';
import { UPDATE_USER_MUTATION } from '../../gql/Mutation/Users';
import openNotificationWithIcon from '../../Helper/Notification';
import Loader from '../../Components/UI/Loader';

const UsersEdit = () => {

    const { id } = useParams()
    const history = useHistory()

    const { loading, data } = useQuery(GET_USER_BY_ID_QUERY, {
        variables : { userByIdId : id }
    })

    const [ UpdateUser, { data : updatedUser,error, loading : editLoading }] = useMutation(UPDATE_USER_MUTATION, {
        refetchQueries : [
            { query : GET_USERS_QUERY,  variables: { status: null,  page: 0 } }
        ]
    })

    const handleUser = (values) => {
        const {confirmPassword, role, password, ...rest} = values
        UpdateUser({ variables : {updateUserId : id,  input: {...rest} }})
    }

    if(loading){
		return <Loader />
	}
	if(error){
		openNotificationWithIcon('userUpdateError', 'error', 'DUPLICATE INPUT ERROR')
	}
    if(updatedUser) {
        openNotificationWithIcon('userEdit', 'success', "USER EDITED SUCCESSFULLY")
        history.push('/users')
    }
    return (
        <div>
        {
            !loading && (
                <UsersForm handleUser={handleUser} user={data?.userById} loading={editLoading}/>
            )
        }
        </div>
    )
}

export default UsersEdit