
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { editAsset, getSingleAsset } from '../../redux/actions/assets/index';
import AssetsForm from './AssetsForm';

const AssetsEdit = () => {

    const dispatch = useDispatch()
    const { id } = useParams()

    const assetsState = useSelector(state => state.assets)
    console.log(useSelector(state => state.assets))

    const handleAsset = (values) => {
        const formData = {updateUserId : id,  input: {...values} }
        dispatch(editAsset(formData))
    }

    useEffect(() => {
        dispatch(getSingleAsset(id))
    }, [dispatch, id])

    return (
        <div>
        {
            assetsState?.asset && (
                <AssetsForm handleAsset={handleAsset} asset={assetsState?.asset}/>
            )
        }
        </div>
    )
}

export default AssetsEdit