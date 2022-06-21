import { useEffect } from 'react';
import Dashboard from "../Dashboard"
import { useDispatch, useSelector } from 'react-redux';
import { getProfile } from '../../redux/actions/profile';

const Profile = () => {

    const dispatch = useDispatch()
    const profile = useSelector(state => state?.profile?.data?.Profile)

    useEffect(() => {
        dispatch(getProfile())
    }, [dispatch])


    return (
        <Dashboard>
            <div className="bg-white h-100 text-center p-4" style={{borderRadius:"0.5rem"}}>
                <img src="user-1.png" width="10%"/>
                <div className="mt-4">
                    <div className="mb-3">
                        <div>
                            <span style={{color: 'black', fontWeight: '600'}}>Username</span> 
                        </div>
                        <div>
                            <span style={{color: 'gray'}}>{profile?.username}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span style={{color: 'black', fontWeight: '600'}}>Email</span> 
                        </div>
                        <div>
                            <span style={{color: 'gray'}}>{profile?.email}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span style={{color: 'black', fontWeight: '600'}}>Role</span> 
                        </div>
                        <div>
                            <span style={{color: 'gray'}}>{profile?.role}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span style={{color: 'black', fontWeight: '600'}}>Contact Number</span> 
                        </div>
                        <div>
                            <span style={{color: 'gray'}}>{profile?.contactNumber}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span style={{color: 'black', fontWeight: '600'}}>Address</span> 
                        </div>
                        <div>
                            <span style={{color: 'gray'}}>{profile?.address}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default Profile