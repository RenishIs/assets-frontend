import Dashboard from "../Dashboard"
// Username, email, role, address, contact no
const data={
    userName: "Sneha Borkar",
    email: "snehab.albiorix@gmail.com",
    role: "admin",
    contactNumber: "9421139287",
    address: "Panaji Goa"
}
const Profile = () => {
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
                            <span style={{color: 'gray'}}>{data.userName}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span style={{color: 'black', fontWeight: '600'}}>Email</span> 
                        </div>
                        <div>
                            <span style={{color: 'gray'}}>{data.email}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span style={{color: 'black', fontWeight: '600'}}>Role</span> 
                        </div>
                        <div>
                            <span style={{color: 'gray'}}>{data.role}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span style={{color: 'black', fontWeight: '600'}}>Contact Number</span> 
                        </div>
                        <div>
                            <span style={{color: 'gray'}}>{data.contactNumber}</span>
                        </div>
                    </div>
                    <div className="mb-3">
                        <div>
                            <span style={{color: 'black', fontWeight: '600'}}>Address</span> 
                        </div>
                        <div>
                            <span style={{color: 'gray'}}>{data.address}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Dashboard>
    )
}

export default Profile