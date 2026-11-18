import { Link, Outlet } from "react-router-dom"
const DashboardLayout = () => {
    return (
        <div>
            <h1>Admin Dashboard</h1>
            <nav>
                <Link to="/dashboard" >Home</Link>
                <Link to="/dashboard/about" >About</Link>
                <Link to="/dashboard/contact" >Contact</Link>
                <Link to="/dashboard/home" >Home2</Link>
            </nav>
            <Outlet/>
        </div>
    )
}
export default DashboardLayout