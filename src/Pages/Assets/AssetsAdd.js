import { useDispatch } from 'react-redux';
import { addAsset } from '../../redux/actions/assets/index';
import AssetsForm from './AssetsForm';

const AssetsAdd = () => {

    const dispatch = useDispatch()

    const handleAsset = (values) => {
        const formData = {
            input: {...values}
        }
        dispatch(addAsset(values))
    }

    return (
       <AssetsForm handleAsset={handleAsset}/>
    )
}

export default AssetsAdd