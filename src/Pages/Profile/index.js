import Dashboard from "../Dashboard"
import { useQuery } from '@apollo/client';
import { GET_PROFILE_QUERY } from '../../gql/Query/Profile/index';

const Profile = () => {

    const { data } = useQuery(GET_PROFILE_QUERY);
    
    return (
        <Dashboard>
            {data?.Profile &&
            <div className="bg-white h-100 text-center p-4" style={{borderRadius:"0.5rem"}}>
                <img src="user-1.png" alt="profile" width="10%"/>
                <div className="mt-4">
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Username</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.Profile?.username}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Email</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.Profile?.email}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Role</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.Profile?.role}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Contact Number</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.Profile?.contactNo}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Address</span> 
                        </div>
                        <div>
                            <span className="text-muted">{data?.Profile?.address}</span>
                        </div>
                    </div>
                </div>
            </div>}
        </Dashboard>
    )
}

export default Profile