// 4. Accessing and Modifying DOM Elements
// Example 3: Change input value and clear input

import {useRef} from "react";

const ChangeInput = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = () => {
        if(inputRef.current) {
            inputRef.current.value = "Hello React!";
        }
    };

    const handleClear = () => {
        if(inputRef.current) {
            inputRef.current.value = "";
        }
    }
    return (
        <div>
            <h2>DOM Manipulation using useRef</h2>
            <input
                ref={inputRef} 
                type="text" 
                placeholder="Type something"
            />
            <button onClick={handleChange}>Change Input</button>
            <button onClick={handleClear}>Clear</button>
        </div>
    )
}

export default ChangeInput;