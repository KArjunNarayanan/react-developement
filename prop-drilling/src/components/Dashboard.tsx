// Prop Drilling

import Profile from "./Profile";

interface User {
    username: string;
}

const Dashboard = ({username}:User) => {
    return (
        <>
            <h3>Dashboard Component</h3>
            <p>Name: {username}</p>
            <Profile username={username}/>
        </>
    )   
}
export default Dashboard;


// Context
import { useContext } from "react";
import UserContext from "../context/Context";

const Dashboard = () => {
    const username = useContext(UserContext);
    return (
        <>
            <h1>Dashboard Welcome</h1>
            <p>Welcome {username}!</p>
        </>
    )
}
export default Dashboard;