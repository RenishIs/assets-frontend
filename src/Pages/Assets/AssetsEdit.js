
import { useParams } from 'react-router-dom';
import AssetsForm from './AssetsForm';

const AssetsEdit = () => {

    const { id } = useParams()

    const assetsState = null
    
    const handleAsset = (values) => {
        const formData = {updateAssetsId : id,  input: {...values} }
    }

    return (
        <div>
        {
            assetsState?.asset && (
                <AssetsForm handleAsset={handleAsset} asset={assetsState?.asset?.Asset}/>
            )
        }
        </div>
    )
}

export default AssetsEdit