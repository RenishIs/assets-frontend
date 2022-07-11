import { PacmanLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className='app-loader d-flex justify-content-center align-items-center'>
            <PacmanLoader color='#001529' size={40}/>
        </div>
    )
}

export default Loader