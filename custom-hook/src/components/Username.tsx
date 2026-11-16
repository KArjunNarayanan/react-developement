import useLocalStorage from "../hook/UseLocalStorage";
const Username = () => {
    const [name, setName] = useLocalStorage<string>("username","");
    return (
        <div>
            <h2>Username: {name || "Guest"}</h2>
            <input type="text"
                    value ={name} placeholder="Enter your name"
                    onChange={(e)=>setName(e.target.value)} />
        </div>
    )
}
export default Username;