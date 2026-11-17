import { Navigate, Outlet } from "react-router-dom"

interface ProtectedProps {
    isLoggedIn: boolean
}

const ProtectedRoutes = ({isLoggedIn}:ProtectedProps) => {
    if(!isLoggedIn){
        return <Navigate to="/login" replace/>
    }
    return <Outlet />
} 
export default ProtectedRoutes