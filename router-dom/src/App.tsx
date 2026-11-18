// Notes


// Why do we need React Router?
// 1. Navigate between different components.
// 2. Avoid full-page browser reloads.
// 3. Create Single Page Applications (SPA).
// 4. Pass dynamic values through URLs.
// 5. Create nested layouts and routes.
// 6. Protect routes based on authentication.


// npm install react-router-dom
// import { BrowserRouter } from "react-router-dom"

// const App = () => {
  //   return (
    //     <BrowserRouter>
    //       {/*Application components */}
    //     </BrowserRouter>
    //   )
// }
// export default App

// - BrowserRouter acts as the parent router.
// - It enables routing throughout the application.
// - All routing-related components should be inside it.
// - It allows navigation without refreshing the entire page.

// main.tsx

// import { Browser Router } from "react-router-dom"

// {/* <StrictMode>
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>  
// </StrictMode> */}


// What is Route?
// A Route defines which component should be displayed for a particular URL.

// What is Routes?
// Routes is a container that holds multiple Route components and renders the best matching route.

// Syntax:
// import { Routes, Route } from "react-router-dom"

// Routes  =	Container for route definitions
// Route   =	Defines an individual route
// path    =	URL path
// element =	Component to display


// What is Link?
// Link is a component provided by React Router that allows users to navigate between routes wihtout refershinthe browser.

// Syntax:
// import { Link } from "react-router-dom";
// <Link to="/about">About</Link>


// HTML Anchor    ||     React Link
// Uses <a>              Uses <Link>
// Uses href             Uses to 
// May reload the page   Does not reload the page

// What is useNavigate?
// useNavigate is a React is a React Router hook used to navigate from one route to another programmatically.

// Unlike Link, which is generally used for clickable navigation, useNavigate is useful when navigation should happen after an action.

// Real-world examples:
// - After successful login, navigate to Dashboard.
// - After submitting a form, navigate to the Home page.
// - After adding a product, navigate to the Cart page.
// - After logout, navigate to the Login page.


// Why do we need React Router?

// What is useParams?
// useParams is a React Router hook used to access dynamic values from the URL.

// Syntax
// import { useParams } from "react-router-dom";
// const { id } = useParams();

// Create Dynamic Route


// import { Routes, Route } from "react-router-dom";
// import ProductDetails from "./components/ProductDetails";

// function App() {
  //    return (
    //     <Routes>
    //       <Route path="/products/:id" element={<ProductDetails />} />
    //     </Routes>
    //     ) 
    // }
    // export default App;
    
    
    // Multiple Dynamic Parameters - REFER
    // React Router also supports multiple dynamic parameters.
    // <Route
    //   path="/courses/:courseId/students/:studentId"
    //   element={<StudentDetails />}
    // />
    
    // import { Routes, Route } from "react-router-dom"
    // import StudentDetails from "./components/StudentDetails"
    
    // const App = () => {
      //   return (
        //     <Routes>
        //        <Route path="/students/:id" element={<StudentDetails />} />
        //      </Routes>
        //   )
        // }
        // export default App;

        
        
        {/* import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Navbar from "./components/Nabar"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"

const App = () => {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={< Home/>} />
      <Route path="/about" element={< About/>} />
      <Route path="/contact" element={< Contact/>} />
      <Route path="/login" element={< Login/>} />
      <Route path="/dashboard" element={< Dashboard/>} />
      </Routes>
      </>
  )
  }
  export default App */}
  
  // Nested Routing
  // What are Nested Routes?
  // Nested routes allow us to create routes inside another route.
  // They are useful when multiple pages share a common layout.
  
  // Real-world example: Admin Dashboard
  
  // Consider an admin dashboard with:
  // - Dashboard
// - Profile
// - Users
// - Settings
// All these pages share the same sidebar and navigation bar.


// Outlet
// Outlet is a component used to display the matching child route inside a parent layout.

import { Routes, Route } from "react-router-dom"
import DashboardLayout from "./components/DashboardLayout"
import Dashboard from "./components/Dashboard"
import Contact from "./components/Contact"
import About from "./components/About"
import Home from "./components/Home"

const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<DashboardLayout/>}>
        <Route index element={< Dashboard/>} />
        <Route path="about" element={< About/>} />
        <Route path="contact" element={< Contact/>} />
        <Route path="home" element={< Home/>} />
      </Route>
    </Routes>
  )
}
export default App

