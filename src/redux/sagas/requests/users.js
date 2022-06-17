const data = {data : [
    {
        id : 1,
        key: '1',
        username: 'John Brown',
        email : 'john@gmail.com',
        contactNo : '8978675645',
        role : 'admin',
    },
    {
        id : 2,
        key: '2',
        username: 'Jim Green',
        email : 'john@gmail.com',
        contactNo : '8978675645',
        role : 'admin',
    },
    {
        id : 3,
        key: '3',
        username: 'Joe Black',
        email : 'john@gmail.com',
        contactNo : '8978675645',
        role : 'admin',
    },
]};

export const getUsersRequest = () => {
    return data
}

export const getSingleUserRequest = (id) => {
    const user = { data : data.data.find(item => item.id == id)}
    return user
}

export const editUserRequest = (payload) => {
    return data
}

export const addUserRequest = (payload) => {
    return data
}

export const deleteUserRequest = () => {
    return data
}