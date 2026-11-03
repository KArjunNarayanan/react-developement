interface Std {
    id:number;
    name:string;
    age:number;
    course:string;
} 
const Students = ({id,name, age, course}: Std)=>{
    return (
        <>
        <div >
            <h1 className="text-blue-600">Name: {name}</h1>
            <h1 className="text-blue-600">id: {id}</h1>
            
            <h1 className="text-blue-600">Age: {age}</h1>
            <h2 className="text-blue-600">Course: {course}</h2>
        </div>
        </>
    )
}
export default Students