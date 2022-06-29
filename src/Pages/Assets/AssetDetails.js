import Dashboard from "../Dashboard"
import { useParams } from "react-router-dom"
import { useQuery } from "@apollo/client"
import { GET_ASSET_BY_ID_QUERY } from "../../gql/Query/Assets"

const AssetDetails = () => {

    const { id } = useParams()

    const { data } = useQuery(GET_ASSET_BY_ID_QUERY, {
		variables: { assetId: id }
	});

    return (
       <Dashboard>
            <div className="bg-white h-100 text-center p-4" style={{borderRadius:"0.5rem"}}>
                <h2 className='text-center fs-4 fw-bold'>ASSET DETAILS</h2>
                <div className="mt-4">
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Name</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.assetById?.name}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Description</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.assetById?.description}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Location</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.assetById?.name}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Asset Category</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.assetById?.name}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Type</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.assetById?.__typename}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Purchased On</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.assetById?.name}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Asset Condition</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.assetById?.name}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Status</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.assetById?.name}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Date of Asset Assignment</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.assetById?.name}</span>
                        </div>
                    </div>
                </div>
            </div>
       </Dashboard>
    )
}

export default AssetDetails