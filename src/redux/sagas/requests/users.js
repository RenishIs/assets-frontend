const data = {data : [
    {
        id : 1,
        key: '1',
        firstName: 'John Brown',
        age: 32,
    },
    {
        id : 2,
        key: '2',
        firstName: 'Jim Green',
        age: 42,
    },
    {
        id : 3,
        key: '3',
        firstName: 'Joe Black',
        age: 32
    },
]};

export const getUsersRequest = () => {
    return data
}

export const getSingleUserRequest = (id) => {
    const user = { data : data.data.find(item => item.id == id)}
    return user
}