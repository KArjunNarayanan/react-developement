// useRef for Persistent Values
// We can store values inside a ref, and those values remain available between component renders.

// What is a persistent value?
// A persistent value is a value that remains stored even when a component re-renders.

// For example:
// - Store the number of button clicks.
// - Store previous values.


import { useRef } from "react";

const Persistent = () => {
    const countRef = useRef<number>(0);
    const handleClick = () => {
        countRef.current++;   // Increase the value stored inside the ref.
        console.log("Count:", countRef.current);
    };

    return (
        <div>
            <h2>useRef Counter</h2>
            <h3>Check the browser console</h3>
            <button onClick={handleClick}>
                Increase Count
            </button>
            <p>
                The displayed UI does not change because updating useRef does not trigger a re-render. If you want the update count to appear on the screen, use useState. 
            </p>
        </div>
    )
}
export default Persistent;

// Example 5: Compare useState and useRef

import { useState, useRef } from "react";

const CompareHooks = () => {
    const [stateCount, setStateCount] = useState<number>(0);
    const refCount = useRef<number>(0);

    const handleState = () => {
        setStateCount(stateCount + 1);
    };

    const handleRef = () => {
        refCount.current++;
        console.log("Ref Count:", refCount.current);
    }

    return (
        <div>
            <h2>useState vs useRef</h2>
            <h3>State Count: {stateCount}</h3>
           <button onClick={handleState}>
                Increase State
            </button>
            <br /><br />
            <h3>Ref Count: Check Console</h3>
            <button onClick={handleRef}>
                Increase Ref
            </button>
        </div>
    )
}

export default CompareHooks;
