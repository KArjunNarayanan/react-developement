// Example 2: Click a button to focus an input
// Scenario: The user clicks the focus button, and the cursor moves to the input field.

import { useRef } from "react"

const UserAction = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const handleFocus = () => {
        inputRef.current?.focus();
    };

    return (
        <div>
            <h2>Focus Example</h2>
            <input
                ref={inputRef} 
                type="text"
            />
            <button onClick={handleFocus}>Focus Btn</button>
        </div>
    )
}

export default UserAction;