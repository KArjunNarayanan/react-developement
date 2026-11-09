// Example 1: Automatically focus an input field
// Scenario: When a user opens a page, the cursor should automatically
// appear inside the username input field.

import { useEffect, useRef } from "react"

const Sample = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        usernameRef.current?.focus();
    },[]);
    return (
        <div>
            <h2>
                Login Form
            </h2>
            <input
                ref={usernameRef}
                type="text" 
                placeholder="Enter username" 
            />
            <br /><br />
            <input
                type="password" 
                placeholder="Enter password" 
            />
        </div>
    )
}

export default Sample;