// import Header from "./components/Header";
// import Welcome from "./components/Welcome"

// const App = () => {
//   return (
//     <div>
//       <h1>React Component Composition / component nesting</h1>
//       <Header />
//       <Welcome />
//     </div>
//   );
// };

// export default App;




// import Student from "./components/Student";

// const App = () => {
//   return (
//     <div>
//       <h1>Props in React</h1>
//       <Student name="Rahul" age={22}/>
//     </div>
//   );
// };

// export default App;



import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <h1>Children props</h1>
      <Card>
        <h2>Welcome</h2>
        <p>Learn React with TypeScript</p>
      </Card>

      <Card>
        <h2>About Us</h2>
        <p>We learn web development.</p>
      </Card>
    </div>
  )
}
export default App;
