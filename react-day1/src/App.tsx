// import Home from "./components/Home"
// import Header from "./components/Header"
import Students from "./components/Student"

interface StudentArray {
    id: number;
    name:string;
    age: number;
    course: string;
} 

const App = () => {
   const arr: StudentArray[] = [
      {
         id:1,
         name:"arjun",
         age:23,
         course:"python"
      },
      {
         id:2,
         name:"salih",
         age:23,
         course:"python"
      },
      {
         id:3,
         name:"sabil",
         age:23,
         course:"python"
      }
   ]
  return (
     <>
     {/* <Home/>
     <Student name="arjun" course="Python" age={21}/>
     <Student name="arj" age={23} course="Java"/>
     <Student name="arju" age={21} course ="Data Analysis" city="Kannur"/>
        <h1>Hellooo...</h1> 
        <p>Paragraph</p> */}

      {arr.map((item)=>(
         <Students 
         key={item.id}
         id={item.id}
         name={item.name}
         age={item.age}
         course={item.course}/>
      ))}

     </>
  )
}
export default App


