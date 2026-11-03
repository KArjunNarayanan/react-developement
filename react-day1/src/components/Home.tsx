import Header from "./Header"
const Home = () =>{
    const studentName: string = "Arjun";
    const course: string = "React with Typescript";
    return (
        <>
        <Header/>
        <h1>Welcome to React</h1>
        <div>
            <h1>Name: {studentName}</h1>
            <h3>Course: {course}</h3>
        </div>
        </>
    )
}

export default Home