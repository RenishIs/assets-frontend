const AuthLayout = ({children, headerText}) => {
    return (
		<div className="gradient-background-blue">
            <div className="gradient-background-black">
                <div className="container" style={{height:"100%"}}>
                    <div className="row align-items-center" style={{height:"100%"}}>
                        <div className="col d-flex justify-content-center my-auto" style={{alignItems:"center"}}>
							<img src="/register.PNG" width="60%" alt="auth_image"/>
						</div>
                        <div className="col">
                            <div>
                                <h4 className="heading-register">{headerText}</h4>
                            </div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthLayout