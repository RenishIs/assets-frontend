import { BeatLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className='app-loader d-flex justify-content-center align-items-center'>
            <BeatLoader color='#001529' size={20}/>
        </div>
    )
}

export default Loader