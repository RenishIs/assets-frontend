import { useEffect } from 'react';
import Dashboard from "../Dashboard"
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/actions/profile';

const Profile = () => {

    const dispatch = useDispatch()
    const profile = useSelector(state => state?.profile)

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])


    return (
        <Dashboard>
            {console.log(profile,'profile')}
            {/* <div className="bg-white h-100 text-center p-4" style={{borderRadius:"0.5rem"}}>
                <img src="user-1.png" width="10%"/>
                <div className="mt-4">
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Username</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profile?.username}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Email</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profile?.email}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Role</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profile?.role}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Contact Number</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profile?.contactNo}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span className="text-body fw-bold">Address</span> 
                        </div>
                        <div>
                            <span className="text-muted">{profile?.address}</span>
                        </div>
                    </div>
                </div>
            </div> */}
        </Dashboard>
    )
}

export default Profile