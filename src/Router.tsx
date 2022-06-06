import { BrowserRouter, Routes, Route } from "react-router-dom"
import Registration from "./Components/Registration"
import Login from "./Components/Login"
import ResetPassword from "./Components/ResetPassword"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
				<Route path="/" element={<Registration />} />
				<Route path="/login" element={<Login />} />
				<Route path="/reset-password" element={<ResetPassword />} />
			</Routes>
        </BrowserRouter>
    )
}

export default Router