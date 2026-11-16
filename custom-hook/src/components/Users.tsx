import useFetch from "../hook/UseFetch";

interface User {
    id: number;
    name: string;
    email: string;
}

function Users() {
    const {data, loading, error} = useFetch<User[]>("https://jsonplaceholder.typicode.com/users");
    if(loading){
        return <h2>Loading users...</h2>;
    }
    if(error){
        return <h2>{error}</h2>;
    }
    return (
        <div>
            <h1>User List</h1>
            {data?.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    );

}
export default Users;