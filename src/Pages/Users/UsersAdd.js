import UsersForm from './UsersForm';

const UsersAdd = () => {

    const handleUser = (values) => {
        const formData = {
            input: {...values}
        }
    }

    return (
       <UsersForm handleUser={handleUser}/>
    )
}

export default UsersAdd