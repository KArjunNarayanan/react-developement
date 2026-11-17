import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Login from "./components/Login"
import ProtectedRoutes from "./components/ProtectedRoutes"
import Dashboard from "./components/Dashboard"
import Home from "./components/Home"
import Contact from "./components/Contact"

const App = () => {
  const [isLoggedIn] = useState(false)
  return (
    <>
    <BrowserRouter>
      <Home />
      <Routes>
        <Route path="/login" element={<Login />} /> 
        <Route path="/contact" element={<Contact />} /> 

        <Route element={<ProtectedRoutes isLoggedIn={isLoggedIn}/>} >
          <Route path="/dashboard" element={<Dashboard/>}  />
        </Route>
        
      </Routes>
    </BrowserRouter>
    </>
  )
}
export default App