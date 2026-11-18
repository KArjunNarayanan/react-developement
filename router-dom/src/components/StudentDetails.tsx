import { useParams } from "react-router-dom"

const StudentDetails = () => {
    const { id } = useParams<{id: string}>()
    const students = [
        { id: 1, name: "John", course: "React" },
        { id: 2, name: "Arun", course: "Python" },
        { id: 3, name: "Rahul", course: "Django" }
    ]
    const student = students.find(
        (item) => item.id === Number(id)
    );
    if(!student) return <h2>Student Not Found</h2>;

    return (
        <>
        <h1>Student Details</h1>
        <p>ID: {student.id}</p>
        <p>Name: {student.name}</p>
        <p>Course: {student.course}</p>
        </>
    )
}
export default StudentDetails