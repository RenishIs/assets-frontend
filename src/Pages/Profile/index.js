import Dashboard from "../Dashboard"
import { useQuery } from '@apollo/client';
import { GET_PROFILE_QUERY } from '../../gql/Query/Profile';

const Profile = () => {

    const { data } = useQuery(GET_PROFILE_QUERY);

    const profileState = null

    return (
        <Dashboard>
            <div className="bg-white h-100 text-center p-4" style={{borderRadius:"0.5rem"}}>
                <img src="user-1.png" alt="profile" width="10%"/>
                <div className="mt-4">
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Username</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profileState?.data?.username}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Email</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profileState?.data?.email}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Role</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profileState?.data?.role}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Contact Number</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profileState?.data?.contactNo}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Address</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profileState?.data?.address}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default Profile