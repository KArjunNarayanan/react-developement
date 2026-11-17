import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/dashboard">Dashboard</Link>
            </nav>
        </>
    )
}
export default Home