import { useDispatch } from 'react-redux';
import { addAsset } from '../../redux/actions/assets';
import AssetsForm from './AssetsForm';

const AssetsAdd = () => {

    const dispatch = useDispatch()

    const handleAsset = (values) => {
        dispatch(addAsset(values))
    }

    return (
       <AssetsForm handleAsset={handleAsset}/>
    )
}

export default AssetsAdd