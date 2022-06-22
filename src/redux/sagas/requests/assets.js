const data = {
    data : [
    {
        id : 1,
        key: '1',
        name: 'Mac',
        description : 'Pro'
    },
    {
        id : 2,
        key: '2',
        name: 'HP',
        description : 'EliteBook'
    }
    ]
};

export const getAssetsRequest = () => {
    return data
}

export const getSingleAssetRequest = (id) => {
    const asset = { data : data.data.find(item => item.id == id)}
    return asset
}

export const editAssetRequest = (payload) => {
    return data
}

export const addAssetRequest = (payload) => {
    return data
}

export const deleteAssetRequest = () => {
    return data
}