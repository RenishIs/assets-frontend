import AssetsForm from './AssetsForm';

const AssetsAdd = () => {

    const handleAsset = (values) => {
        const formData = {
            input: {...values}
        }
    }

    return (
       <AssetsForm handleAsset={handleAsset}/>
    )
}

export default AssetsAdd