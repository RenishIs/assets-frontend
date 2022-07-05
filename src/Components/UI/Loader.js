import { PacmanLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className='app-loader d-flex justify-content-center align-items-center'>
            <PacmanLoader color='white' size={40}/>
        </div>
    )
}

export default Loader