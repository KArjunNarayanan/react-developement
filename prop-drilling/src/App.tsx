// Prop Drilling - App.tsx

import Dashboard from "./components/Dashboard";
const App = () => {
  const username: string = "arju";
  return (
    <>
    <h1>Prop Drilling Example</h1>
    <Dashboard username={username}/>
    </>
  )
}
export default App;


// App
// Contains user information

// Dashboard
// Receives user through props

// Profile
// Receives user through props

// UserDetails
// Actually needs the user data.


// Here Dashboard and Profile might not need the user data, but they must pass it  to their children.
// This is prop drilling

// Context - App.tsx

import UserContext from "./context/Context";
import Dashboard from "./components/Dashboard";

const App = () => {
    return (
        <>
        <UserContext.Provider value="Arjun">
            <Dashboard />
        </UserContext.Provider>
        </>
    )
}
export default App;


