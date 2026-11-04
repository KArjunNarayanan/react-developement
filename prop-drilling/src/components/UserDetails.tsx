
interface User {
    username: string;
}

const UserDetails = ({username}:User) => {
    return (
        <>
            <h3>Welcome {username}!!</h3>
        </>
    )   
}
export default UserDetails;