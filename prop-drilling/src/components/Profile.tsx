import UserDetails from "./UserDetails";

interface User {
    username: string;
}

const Profile = ({username}:User) => {
    return (
        <>
            <h3>Profile Component</h3>
            <UserDetails username={username}/>
        </>
    )   
}
export default Profile;